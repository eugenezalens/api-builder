import {
  TApiBuilderPath as TPath,
  TApiBuilderQueryParams as TQueryParams,
  TApiBuilderService as TService,
} from '@/common/builders/ApiBuilder/types/common'

export type TApiBuilderPostConfig<P = any> = {
  type: 'POST'
  service: TService
  path: TPath
  payload: P
  queryParams?: TQueryParams
}
