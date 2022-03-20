import { Controller, Get, OnModuleInit } from '@nestjs/common'
import { Client, ClientGrpc } from '@nestjs/microservices'
import { CommentsServiceClientOptions } from './comments-svc.options'
import { ICommentsService } from './comments.interface'

@Controller('comments')
export class CommentsController implements OnModuleInit {
  @Client(CommentsServiceClientOptions) private readonly commentsServiceClient: ClientGrpc
  private commentsService: ICommentsService

  onModuleInit () {
    this.commentsService = this.commentsServiceClient.getService<ICommentsService>('CommentsService')
  }

  @Get('/')
  async getCommentList () {
    const result = await this.commentsService.findAll({ attributes: ['comment'] }).toPromise()
    console.log(result, 'duarbdhks 1111')
  }
}
