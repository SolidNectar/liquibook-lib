include(FindProtobuf)
find_package(Protobuf REQUIRED)

PROTOBUF_GENERATE_CPP(PROTO_SRC PROTO_HEADER reactor.proto reactorctl.proto markets.proto)
ADD_LIBRARY(reactor_proto ${PROTO_HEADER} ${PROTO_SRC})
