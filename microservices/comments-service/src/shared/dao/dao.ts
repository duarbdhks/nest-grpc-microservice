import { DeleteResult, InsertResult, UpdateResult } from 'typeorm'

export class DAO {
  returnResultList<T>(result: InsertResult | UpdateResult | DeleteResult): T[] {
    const { raw } = result
    return raw.reduce((r, c) => [...r, c], [])
  }

  returnResult<T>(result: InsertResult | UpdateResult | DeleteResult): T {
    const { raw } = result
    return raw.reduce((r, c) => ({ ...r, ...c }), {})
  }
}
