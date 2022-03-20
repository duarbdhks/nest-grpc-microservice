import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentEntity } from '@shared/entity'
import { Repository } from 'typeorm'

@Injectable()
export class CommentsDAO {
  constructor (
    @InjectRepository(CommentEntity) private readonly commentRepository: Repository<CommentEntity>,
  ) {
  }

  findAll (): Promise<CommentEntity[]> {
    return this.commentRepository.createQueryBuilder('c')
      .getMany()
  }
}
