import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './modules/comments/comments.module'
import { HealthCheckModule } from './modules/health-check/health-check.module'

@Module({
  imports: [
    HealthCheckModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
