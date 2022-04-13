import { common } from '@proto/common'

// export interface IId extends common.Id {
//   id: string
// }

// export interface IName extends common.Name {
//   name: string
// }

// export interface IQuery extends common.Query {
//   attributes?: string[]
//   where?: string
//   order?: string
//   offset?: number
//   limit?: number
// }

// export interface ICount extends common.Count {
//   count: number
// }

export interface IUpdateOptions<S = any, W = any> {
  set?: S
  where: W
}

export interface IDAOOptions<V = undefined, S = undefined, W = undefined> {
  values?: V
  set?: S
  where?: W
}
