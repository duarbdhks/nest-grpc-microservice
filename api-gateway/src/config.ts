const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || 'development',
  port: ENV.PORT || 3000,
  comments: {
    service_url: ENV.COMMENTS_SVC_URL || 'localhost',
    port: ENV.COMMENTS_SVC_PORT || 50051,
  },
  organizations: {
    service_url: ENV.ORGANIZATIONS_SVC_URL || 'localhost',
    port: ENV.ORGANIZATIONS_SVC_PORT || 50052,
  },
  users: {
    service_url: ENV.USERS_SVC_URL || 'localhost',
    port: ENV.USERS_SVC_PORT || 50053,
  },
}
