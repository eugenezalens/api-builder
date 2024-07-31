import { ApiBuilderJsonPlaceholderGetRequestHelpers as RequestHelpers } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/modules/ApiBuilderJsonPlaceholderGet/utils/helpers'
import { makeApiBuilderGetRequest } from '@/common/builders/ApiBuilder/modules/common/ApiBuilderGet/utils'
import { TApiBuilderGetConfig as TGetConfig } from '@/common/builders/ApiBuilder/types/configs'
import { TApiBuilderResponse as TResponse } from '@/common/builders/ApiBuilder/types/responses'

export const makeApiBuilderJsonPlaceholderGetRequest = async <D = any>(config: TGetConfig): Promise<TResponse<D>> => {
  const req = RequestHelpers.buildRequest(config)
  const res = await makeApiBuilderGetRequest<D>(req)

  return res
}
