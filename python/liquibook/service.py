import os
import aioamqp
from aioamqp.exceptions import AmqpClosedConnection
import asyncio
import aioredis
from core import config
import logging
from rpc import JSONRPCException

config.use_standard_logging()

BACKOFF_SQRT2 = 1.414
BACKOFF_MAX = 60

class Exchange:
    def __init__(self, exchange, type):
        self.exchange = exchange
        self.type = type

    async def declare(self, channel):
        await channel.exchange_declare(exchange_name=self.exchange,
                                       type_name=self.type,
                                       durable=True)


class Binding:
    def __init__(self, exchange, topic, handler):
        self.exchange = exchange
        self.topic = topic
        self.handler = handler

    async def bind(self, queue, channel):
        await channel.queue_bind(queue_name=queue,
                                 exchange_name=self.exchange,
                                 routing_key=self.topic)
        await channel.basic_consume(self.on_message,
                                    queue_name=queue,
                                    no_ack=True)

    def on_message(self, channel, body, envelope, properties):
        self.service.log.info("{0}/{1} ->> {2}".format(envelope.exchange_name, envelope.routing_key, body))
        try:
             message = json.loads(body.decode('utf-8'))
        except:
            # should never happen, but rather than brush under a rug
            # these require manual intervention to clear from the queue
            self.service.log.error("received invalid JSON body {0}".format(body))
            return

        self.handler(message)


# callbacks beginning with on_ should service the call and return and
# should not be long-running tasks.  Use create_task to create a long
# running task.
#
class Service:
    def __init__(self, name, amqp=True, redis=False):
        self.log = logging.getLogger(name)
        self.loop = asyncio.get_event_loop()
        self.keep_running = True
        self.connect_amqp = amqp
        self.connect_redis = redis
        self.connected = False
        self.transport = None
        self.channel = None
        self.queue = None
        self.exchanges = []
        self.bindings = []

    def declare(self, *args, **kwargs):
        self.exchanges.append(Exchange(*args, **kwargs))

    def bind(self, *args, **kwargs):
        self.bindings.append(Binding(*args, **kwargs))

    def run(self):
        if self.connect_amqp:
            self.loop.create_task(self.amqp_task())
        if self.connect_redis:
            self.loop.create_task(self.redis_task())

        self.loop.run_forever()

    def create_task(self, task):
        self.loop.create_task(self.exception_handling(task))

    def stop(self):
        self.keep_running = False
        # TBD: interrupt AMQP and Redis tasks for graceful exit


    async def exception_handling(self, task):
        try:
            await task()
        except asyncio.TimeoutError:
            self.log.info('{0} didnt complete in 5 minutes, bitcoin node is probably rescanning'.format(task.__name__))
            self.create_task(task)
        except JSONRPCException as e:
            self.log.info("{0} didnt complete. ".format(task.__name__) + str(e))
            self.create_task(task)


    async def sleep(self, timeout):
        await asyncio.sleep(timeout)

    async def amqp_task(self, pause_retry=1):
        try:
            self.log.info("AMQP: attempting connection to {0}:{1}".format(config.amqp.host,
                                                                          config.amqp.port))

            self.transport, self.protocol = await aioamqp.connect(host=config.amqp.host,
                                                                  port=config.amqp.port,
                                                                  login=config.amqp.login,
                                                                  password=config.amqp.password,
                                                                  loop=self.loop)
            try:
                pause_retry = 1

                self.channel = await self.protocol.channel()
                if self.connected:
                    self.log.info("AMQP: reconnected")
                else:
                    self.connected = True
                    self.log.info("AMQP: connected to {0}:{1}".format(config.amqp.host, config.amqp.port))

                for exchange in self.exchanges:
                    await exchange.declare(self.channel)

                result = await self.channel.queue_declare(exclusive=True, durable=False)
                self.queue = result['queue']

                for binding in self.bindings:
                    await binding.bind(self.queue, self.channel)

                await self.on_amqp_connect(self.channel)
            except:
                await self.protocol.close(no_wait=True)
                raise

            await self.protocol.wait_closed()

        except OSError:
            pass

        except AmqpClosedConnection:
            pass

        finally:
            self.log.warning("AMQP: not connected, will retry")
            await self.on_amqp_disconnect()
            if self.keep_running:
                self.loop.call_later(pause_retry,
                                    lambda: self.create_task(self.amqp_task(pause_retry=backoff(pause_retry))))

    async def on_amqp_connect(self, channel):
        pass

    async def on_amqp_disconnect(self):
        pass

    async def redis_task(self, pause_retry=1):
        connection = (config.redis.host, config.redis.port)
        try:
            self.log.info("Redis: attempting connection to {0}:{1}".format(*connection))
            redis = await aioredis.create_redis(connection, loop=self.loop)
            pause_retry = 1
            self.log.info("Redis: connected to {0}:{1}".format(*connection))
            await self.on_redis_connect(redis)
            await redis.wait_closed()

        except OSError:
            pass

        except ConnectionRefusedError:
            pass

        finally:
            self.log.warning("Redis: not connected, will retry")
            await asyncio.sleep(pause_retry)
            if self.keep_running:
                self.loop.create_task(self.redis_task(pause_retry=backoff(pause_retry)))

    async def on_redis_connect(self, redis):
        pass

def backoff(t):
    return BACKOFF_MAX if t >= BACKOFF_MAX else t * BACKOFF_SQRT2
