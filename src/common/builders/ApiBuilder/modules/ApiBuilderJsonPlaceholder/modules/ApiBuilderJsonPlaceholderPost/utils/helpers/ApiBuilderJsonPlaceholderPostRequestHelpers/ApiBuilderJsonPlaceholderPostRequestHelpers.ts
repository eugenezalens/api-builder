import { API_BUILDER_JSON_PLACEHOLDER_BASE_URL as BASE_URL } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/utils/constants'
import { TApiBuilderPostRequest as TPostRequest } from '@/common/builders/ApiBuilder/modules/common/ApiBuilderPost/types'
import { TApiBuilderPath as TPath } from '@/common/builders/ApiBuilder/types/common'
import { TApiBuilderPostConfig as TPostConfig } from '@/common/builders/ApiBuilder/types/configs'

const createUrl = (path: TPath): string => {
  return `${BASE_URL}${path}`
}

const buildRequest = <P = any>(config: TPostConfig): TPostRequest<P> => {
  const request: TPostRequest = {
    type: 'POST',
    url: createUrl(config.path),
    payload: config.payload,
  }

  if (config.queryParams) request.queryParams = config.queryParams

  return request
}

export const ApiBuilderJsonPlaceholderPostRequestHelpers = { buildRequest }
