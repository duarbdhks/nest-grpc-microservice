export interface IId {
  id: string
}

export interface IName {
  name: string
}

export interface IQuery {
  attributes?: Array<string>
  where?: string
  order?: string
  offset?: number
  limit?: number
}

export interface ICount {
  count: number
}
