#!/bin/bash

cd api-gateway && npm i && cd -
cd microservices/comments-service && npm i && cd -
cd microservices/organizations-service && npm i && cd -
cd microservices/users-service && npm i && cd -
