import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config'

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: { safe: true, prettyPrint: config.env === 'development' }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
