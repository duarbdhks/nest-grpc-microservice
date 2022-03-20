import { ClientOptions, Transport } from '@nestjs/microservices'
import { config } from '../../config'
import { join } from 'path'

export const CommentsServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${config.comments.service_url}:${config.comments.port}`,
    package: 'comments',
    protoPath: join(__dirname, '../../_proto/comments.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    }
  }
}
