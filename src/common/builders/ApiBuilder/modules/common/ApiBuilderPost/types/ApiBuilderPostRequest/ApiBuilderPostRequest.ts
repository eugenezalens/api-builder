import { TApiBuilderQueryParams as TQueryParams } from '@/common/builders/ApiBuilder/types/common'

export type TApiBuilderPostRequest<P = any> = {
  type: 'POST'
  url: string
  payload: P
  queryParams?: TQueryParams
}
