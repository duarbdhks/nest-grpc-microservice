import { Type } from 'class-transformer'
import { CommentDTO } from './comment.response.dto'

export class CommentListResponseDTO {
  @Type(() => CommentDTO)
  data: CommentDTO[]
}
