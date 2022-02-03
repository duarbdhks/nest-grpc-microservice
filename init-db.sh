#!/bin/bash
set -e

psql -U "$POSTGRES_USER" postgres <<-EOSQL
  CREATE USER grpc_comments WITH PASSWORD '1234';
  CREATE DATABASE grpc_comments;
  GRANT ALL PRIVILEGES ON DATABASE grpc_comments to grpc_comments;

  CREATE USER grpc_organizations WITH PASSWORD '1234';
  CREATE DATABASE grpc_organizations;
  GRANT ALL PRIVILEGES ON DATABASE grpc_organizations to grpc_organizations;

  CREATE USER grpc_users WITH PASSWORD '1234';
  CREATE DATABASE grpc_users;
  GRANT ALL PRIVILEGES ON DATABASE grpc_users to grpc_users;
EOSQL
