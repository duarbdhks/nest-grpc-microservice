import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common'
import { Client, ClientGrpc } from '@nestjs/microservices'
import { CommentListResponseDTO, CreateCommentRequestDTO } from '@modules/comments/dto'
import { comments } from '@proto/comments'
import { config } from '@server/config'
import { AxiosResponse } from 'axios'
import { plainToInstance } from 'class-transformer'
import { lastValueFrom, Observable } from 'rxjs'
import { HttpService } from '@nestjs/axios'
import { CommentsServiceClientOptions } from './comments-svc.options'

@Controller('comments')
export class CommentsController implements OnModuleInit {
  @Client(CommentsServiceClientOptions) private readonly commentsServiceClient: ClientGrpc
  private commentsService: comments.CommentsService

  constructor(
    private readonly httpService: HttpService,
  ) {}

  onModuleInit() {
    this.commentsService = this.commentsServiceClient.getService<comments.CommentsService>('CommentsService')
  }

  @Get('/')
  async getCommentList(): Promise<CommentListResponseDTO> {
    const result = await this.commentsService.findAll({ attributes: ['comment'] }).toPromise()
    console.log(result, 'duarbdhks 222')
    return plainToInstance(CommentListResponseDTO, result)
  }

  @Post('/')
  async createComment(
    @Body() body: CreateCommentRequestDTO
  ) {
    const { comment, organization } = body
    const result = await lastValueFrom(this.commentsService.create({ comment, organization }))
  }

  @Get('/rest/test')
  async test2(): Promise<any> {
    try {
      const { data } = await lastValueFrom(this.httpService.get(`http://localhost:50052/comments/rest/test`))
      return data
    } catch (e) {
      console.log(e)
      return e.toJSON()
    }
  }
}
