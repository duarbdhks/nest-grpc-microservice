import { IDAOOptions } from '@interface/common.interface'
import { CreateCommentRequestDTO } from '@modules/comments/dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { common } from '@proto/common'
import { DAO } from '@shared/dao/dao'
import { CommentEntity } from '@shared/entity'
import { Repository } from 'typeorm'

@Injectable()
export class CommentsDAO extends DAO {
  constructor(
    @InjectRepository(CommentEntity) private readonly commentRepository: Repository<CommentEntity>,
  ) {
    super()
  }

  getCommentList(query: common.Query): Promise<CommentEntity[]> {
    const { where, limit, offset, order, attributes } = query
    return this.commentRepository.createQueryBuilder('c')
      .getMany()
  }

  async createComment(options: IDAOOptions<CreateCommentRequestDTO>): Promise<CommentEntity> {
    const { values } = options
    const result = await this.commentRepository.createQueryBuilder('c')
      .insert()
      .values(values)
      .returning('*')
      .execute()

    return this.returnResult<CommentEntity>(result)
  }
}
