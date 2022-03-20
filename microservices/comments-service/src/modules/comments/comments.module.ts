import { CommentsController } from '@modules/comments/comments.controller'
import { CommentsDAO } from '@modules/comments/comments.dao'
import { CommentsService } from '@modules/comments/comments.service'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentEntity } from '@shared/entity'
import { LoggerModule } from 'nestjs-pino'

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    LoggerModule.forRoot({ pinoHttp: { safe: true, prettyPrint: process.env.NODE_ENV === 'development' } })
  ],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsDAO],
})
export class CommentsModule {
}
