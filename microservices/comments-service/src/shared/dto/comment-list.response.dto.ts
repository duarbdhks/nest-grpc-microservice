import { CommentDTO } from '@shared/dto/comment.response.dto'
import { Type } from 'class-transformer'

export class CommentListResponseDTO {
  @Type(() => CommentDTO)
  data: CommentDTO[]
}
