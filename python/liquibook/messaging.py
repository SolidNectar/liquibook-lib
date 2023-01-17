import jsonpickle


class Message:
    @staticmethod
    def decode(json):
        return jsonpickle.decode(json)

    def __str__(self):
        return jsonpickle.encode(self)


class JournaledMessage:
    def __init__(self, port, sequence, who, dest, operation):
        self.port = port
        self.sequence = sequence
        self.who = who
        self.dest = dest
        self.operation = operation

"""
class Order:
    market = models.ForeignKey(Market, related_name='orders', null=False)
    member = models.ForeignKey(User, related_name='orders', null=False)
    uuid = models.CharField(max_length=36, unique=True)
    order_type = models.CharField(max_length=8, choices=ORDER_TYPE_CHOICES)
    side = models.CharField(max_length=4, choices=ORDER_SIDE_CHOICES)
    qty = models.IntegerField(null=False)
    price = models.FloatField(null=True)
"""

class TradeNotification(Message):
    def __init__(self, **kwargs):
        self.__dict__ = kwargs
        assert self.market is not None
        assert self.t is not None
        assert self.party1 is not None
        assert self.uuid1 is not None
        assert self.side1 is not None
        assert self.party2 is not None
        assert self.uuid2 is not None
        assert self.side_2 is not None
        assert self.px is not None
        assert self.qty is not None
