import { comments } from '@proto/comments'
import { IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateCommentRequestDTO implements comments.CreateCommentRequest {
  @IsOptional()
  @IsUUID()
  organization?: string

  @IsOptional()
  @IsString()
  comment?: string
}
