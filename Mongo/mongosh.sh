#!/usr/bin/env bash

export MONGODB_VERSION=7.0.8-ubi8

docker run --name mongosh -it \
-e MONGO_INITDB_ROOT_USERNAME=user \
-e MONGO_INITDB_ROOT_PASSWORD=pass \
mongodb/mongodb-community-server:$MONGODB_VERSION mongosh