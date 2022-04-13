import { CommentsDAO } from '@modules/comments/comments.dao'
import { CommentListResponseDTO, CreateCommentRequestDTO } from '@modules/comments/dto'
import { Injectable } from '@nestjs/common'
import { comments } from '@proto/comments'
import { common } from '@proto/common'
import { CommentDTO } from '@shared/dto'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class CommentsService implements comments.CommentsService {
  constructor(
    private readonly commentDAO: CommentsDAO,
  ) {
  }

  async findAll(query: common.Query): Promise<CommentListResponseDTO> {
    const result = await this.commentDAO.getCommentList(query)
    return plainToInstance(CommentListResponseDTO, { data: result })
  }

  async create(options: CreateCommentRequestDTO): Promise<CommentDTO> {
    const { organization, comment } = options
    const result = await this.commentDAO.createComment({ values: { organization, comment } })
    return plainToInstance(CommentDTO, result)
  }
}
