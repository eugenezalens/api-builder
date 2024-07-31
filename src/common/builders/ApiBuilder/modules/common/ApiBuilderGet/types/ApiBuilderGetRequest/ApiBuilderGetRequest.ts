import { TApiBuilderQueryParams as TQueryParams } from '@/common/builders/ApiBuilder/types/common'

export type TApiBuilderGetRequest = {
  type: 'GET'
  url: string
  queryParams?: TQueryParams
}
