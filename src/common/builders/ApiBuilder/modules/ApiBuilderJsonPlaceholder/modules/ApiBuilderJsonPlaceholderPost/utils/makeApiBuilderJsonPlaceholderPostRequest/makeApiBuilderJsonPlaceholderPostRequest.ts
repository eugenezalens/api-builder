import { ApiBuilderJsonPlaceholderPostRequestHelpers as RequestHelpers } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/modules/ApiBuilderJsonPlaceholderPost/utils/helpers'
import { makeApiBuilderPostRequest } from '@/common/builders/ApiBuilder/modules/common/ApiBuilderPost/utils'
import { TApiBuilderPostConfig as TPostConfig } from '@/common/builders/ApiBuilder/types/configs'
import { TApiBuilderResponse as TResponse } from '@/common/builders/ApiBuilder/types/responses'

export const makeApiBuilderJsonPlaceholderPostRequest = async <D = any>(config: TPostConfig): Promise<TResponse<D>> => {
  const req = RequestHelpers.buildRequest(config)
  const res = await makeApiBuilderPostRequest<D>(req)

  return res
}
