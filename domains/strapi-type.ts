interface StrapiGenericData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface StrapiGenericMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export type StrapiApiResponse<T> = {
  data: (StrapiGenericData & T)[]
  meta: StrapiGenericMeta
}

export type StrapiApiResponseSingle<T> = {
  data: (StrapiGenericData & T)
  meta: object
}
