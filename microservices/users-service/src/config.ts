const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || 'development',
  url: ENV.URL || '0.0.0.0',
  port: ENV.PORT || 50051,
  db: {
    connectionString: ENV.DB_URL || 'postgres://grpc_users:1234@localhost:30080/grpc_users',
    max: +ENV.DB_POOLSIZE || 1,
  },
}

