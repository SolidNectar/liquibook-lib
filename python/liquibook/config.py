import os

class amqp:
    host = os.environ.get('LOCI_AMQP_HOST', 'mq')
    port = int(os.environ.get('LOCI_AMQP_PORT', '5672'))
    login = os.environ.get('LOCI_AMQP_LOGIN', 'system')
    password = os.environ.get('LOCI_AMQP_PASSWORD', 'system')
    url = "amqp://{0}:{1}@{2}:{3}//".format(login, password, host, port)

class db:
    host = os.environ.get('LOCI_DATABASE_HOST', 'db')
    port = os.environ.get('LOCI_DATABASE_PORT', '5432')
    name = os.environ.get('LOCI_DATABASE_NAME', 'loci')
    user = os.environ.get('LOCI_DATABASE_USER', 'loci')
    password = os.environ.get('LOCI_DATABASE_PASSWORD', 'loci')

class tsdb:
    host = os.environ.get('LOCI_TSDB_HOST', 'tsdb')
    port = os.environ.get('LOCI_TSDB_PORT', '7568')
    name = os.environ.get('LOCI_TSDB_NAME', 'loci')
    user = os.environ.get('LOCI_TSDB_USER', 'loci')
    password = os.environ.get('LOCI_TSDB_PASSWORD', 'loci')

class redis:
    host = os.environ.get('LOCI_REDIS_HOST', 'redis')
    port = int(os.environ.get('LOCI_REDIS_PORT', '6379'))
    db = int(os.environ.get('LOCI_REDIS_DB', '1'))
    url = "redis://{0}:{1}/".format(host, port)

class logger:
    path = os.environ.get('LOCI_LOG_PATH', 'log.yaml')

class mds:
    host = os.environ.get("MDS_HOST", 'mds')
    port = os.environ.get("MDS_PORT", "5993")
    url = "http://{0}:{1}/rpc".format(host, port)

def use_standard_logging():
    import logging.config
    import yaml

    if os.path.exists(logger.path):
        with open(logger.path, 'rt') as logging_config:
            logging.config.dictConfig(yaml.load(logging_config.read(), Loader=yaml.SafeLoader))
    else:
        logging.basicConfig(level=logging.INFO)
