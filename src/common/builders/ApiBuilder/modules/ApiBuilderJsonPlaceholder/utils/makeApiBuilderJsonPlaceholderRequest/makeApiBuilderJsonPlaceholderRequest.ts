import { makeApiBuilderJsonPlaceholderGetRequest as makeGetRequest } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/modules/ApiBuilderJsonPlaceholderGet/utils'
import { makeApiBuilderJsonPlaceholderPostRequest as makePostRequest } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/modules/ApiBuilderJsonPlaceholderPost/utils'
import { TApiBuilderConfig as TConfig } from '@/common/builders/ApiBuilder/types/configs'
import { TApiBuilderResponse as TResponse } from '@/common/builders/ApiBuilder/types/responses'
import { ApiBuilderResponseHelpers as ResponseHelpers } from '@/common/builders/ApiBuilder/utils/helpers'

export const makeApiBuilderJsonPlaceholderRequest = async <D = any, P = any>(
  config: TConfig<P>,
): Promise<TResponse<D>> => {
  switch (config.type) {
    case 'GET':
      return makeGetRequest<D>(config)

    case 'POST':
      return makePostRequest<D>(config)

    default:
      return ResponseHelpers.createUnknown()
  }
}
