const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || 'development',
}

