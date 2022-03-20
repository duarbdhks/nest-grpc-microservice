import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoggerModule } from 'nestjs-pino'
import { config } from './config'
import { CommentsModule } from '@modules/comments/comments.module'
import * as path from 'path'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.db.connectionString,
      entities: [path.join(__dirname, 'shared/entity/**/*.entity{.ts,.js}')],
      synchronize: false,
      logging: ['error'],
      extra: { max: config.db.max },
      keepConnectionAlive: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: { safe: true, prettyPrint: config.env === 'development' }
    }),
    CommentsModule,
  ],
})
export class AppModule {
}
