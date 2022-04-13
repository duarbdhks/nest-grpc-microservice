import { Module } from '@nestjs/common'
import { CommentsController } from './comments.controller'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [CommentsController],
})
export class CommentsModule {
}
