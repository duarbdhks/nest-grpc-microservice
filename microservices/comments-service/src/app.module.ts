import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoggerModule } from 'nestjs-pino'
import { config } from './config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.db.connectionString,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: false,
      logging: ['error'],
      extra: { max: config.db.max },
      keepConnectionAlive: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: { safe: true, prettyPrint: config.env === 'development' }
    })
  ],
})
export class AppModule {
}
