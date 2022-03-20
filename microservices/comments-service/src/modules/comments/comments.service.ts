import { CommentsDAO } from '@modules/comments/comments.dao'
import { Injectable } from '@nestjs/common'
import { CommentDTO } from '@shared/dto'
import { IQuery } from '@shared/interface'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class CommentsService {
  constructor (
    private readonly commentDAO: CommentsDAO,
  ) {
  }

  async findAll (query: IQuery): Promise<CommentDTO[]> {
    console.log(query, 'duarbdhks 444444444')
    const result = await this.commentDAO.findAll()

    console.log(result, 'duarbdhks 555555555555')
    return plainToInstance(CommentDTO, result)
  }
}
