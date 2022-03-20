import { Observable } from 'rxjs'
import { CommentListResponseDTO } from '../../shared/dto'
import { IQuery } from '../../shared/interface'

export interface ICommentsService {
  findAll (query?: IQuery): Observable<CommentListResponseDTO>
}
