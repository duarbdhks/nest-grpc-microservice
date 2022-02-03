const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || 'development',
  url: ENV.URL || '0.0.0.0',
  port: ENV.PORT || 50051,
  db: {
    connectionString: ENV.DB_URL || 'postgres://grpc_comments:1234@localhost:30090/grpc_comments',
    max: +ENV.DB_POOLSIZE || 1,
  },
}

