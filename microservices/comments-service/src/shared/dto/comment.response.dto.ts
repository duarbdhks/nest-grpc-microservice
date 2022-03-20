import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class CommentDTO {
  /** Comment id */
  @Expose()
  id: string

  /** Comment organization */
  @Expose()
  organization: string

  /** Comment comment */
  @Expose()
  comment: string

  /** Comment createdAt */
  @Expose()
  createdAt: string

  /** Comment updatedAt */
  @Expose()
  updatedAt: string
}
