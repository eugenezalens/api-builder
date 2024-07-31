import { makeApiBuilderJsonPlaceholderRequest as makeJsonPlaceholderRequest } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/utils'
import { TApiBuilderConfig as TConfig } from '@/common/builders/ApiBuilder/types/configs'
import { TApiBuilderResponse as TResponse } from '@/common/builders/ApiBuilder/types/responses'
import { ApiBuilderResponseHelpers as ResponseHelpers } from '@/common/builders/ApiBuilder/utils/helpers'

export const makeRequest = async <D = any, P = any>(config: TConfig<P>): Promise<TResponse<D>> => {
  switch (config.service) {
    case 'jsonPlaceholder':
      return makeJsonPlaceholderRequest<D, P>(config)

    default:
      return ResponseHelpers.createUnknown()
  }
}
