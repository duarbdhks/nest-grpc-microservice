import { comments } from '@proto/comments'
import { CommentDTO } from '@shared/dto'
import { Exclude, Expose, Type } from 'class-transformer'

@Exclude()
export class CommentListResponseDTO implements comments.CommentList {
  @Expose()
  @Type(() => CommentDTO)
  data: CommentDTO[]
}
