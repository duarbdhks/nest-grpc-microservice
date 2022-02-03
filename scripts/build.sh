#!/bin/bash

cd api-gateway && npm run build && cd -
cd microservices/comments-service && npm run build && cd -
cd microservices/organizations-service && npm run build && cd -
cd microservices/users-service && npm run build && cd -
