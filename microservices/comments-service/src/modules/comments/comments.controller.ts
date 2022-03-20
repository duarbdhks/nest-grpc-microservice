import { CommentsService } from '@modules/comments/comments.service'
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { CommentListResponseDTO } from '@shared/dto'
import { IQuery } from '@shared/interface'
import { plainToInstance } from 'class-transformer'
import { PinoLogger } from 'nestjs-pino'

@Controller()
export class CommentsController {
  constructor (
    private readonly commentsService: CommentsService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(CommentsController.name)
  }

  @GrpcMethod('CommentsService', 'findAll')
  async findAll (query: IQuery): Promise<CommentListResponseDTO> {
    this.logger.info('CommentsController#findAll.call', query)

    console.log(query, 'duarbdhks 111111')
    const { attributes, where, order, offset, limit } = query
    const result = await this.commentsService.findAll({
      attributes,
      where: where ? JSON.parse(where) : undefined,
      order: order ? JSON.parse(order) : undefined,
      offset: offset ?? 0,
      limit: limit ?? 25
    })
    console.log(result, 'duarbdhks 2222')

    this.logger.info('CommentsController#findAll.result', result)

    return plainToInstance(CommentListResponseDTO, { data: result })
  }
}
