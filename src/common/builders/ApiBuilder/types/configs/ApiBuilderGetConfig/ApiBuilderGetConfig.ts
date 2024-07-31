import {
  TApiBuilderPath as TPath,
  TApiBuilderQueryParams as TQueryParams,
  TApiBuilderService as TService,
} from '@/common/builders/ApiBuilder/types/common'

export type TApiBuilderGetConfig = {
  type: 'GET'
  service: TService
  path: TPath
  queryParams?: TQueryParams
}
