import { CommentsService } from '@modules/comments/comments.service'
import { CommentListResponseDTO, CreateCommentRequestDTO } from '@modules/comments/dto'
import { Controller, Get } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { common } from '@proto/common'
import { CommentDTO } from '@shared/dto'

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
  ) {
  }

  @GrpcMethod('CommentsService', 'findAll')
  async findAll(query: common.Query): Promise<CommentListResponseDTO> {
    const { attributes, where, order, offset, limit } = query
    return this.commentsService.findAll({
      attributes,
      where: where ? JSON.parse(where) : undefined,
      order: order ? JSON.parse(order) : undefined,
      offset: offset ?? 0,
      limit: limit ?? 25
    })
  }

  @GrpcMethod('CommentsService', 'create')
  async create(options: CreateCommentRequestDTO): Promise<CommentDTO> {
    return this.commentsService.create(options)
  }

  @Get('/rest/test')
  async test(): Promise<any> {
    return { hello: 'world' }
  }
}
