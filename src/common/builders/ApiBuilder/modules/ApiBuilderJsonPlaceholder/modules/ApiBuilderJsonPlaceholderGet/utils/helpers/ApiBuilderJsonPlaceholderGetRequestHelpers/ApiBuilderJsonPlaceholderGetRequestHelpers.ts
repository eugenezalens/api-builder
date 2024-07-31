import { API_BUILDER_JSON_PLACEHOLDER_BASE_URL as BASE_URL } from '@/common/builders/ApiBuilder/modules/ApiBuilderJsonPlaceholder/utils/constants'
import { TApiBuilderGetRequest as TGetRequest } from '@/common/builders/ApiBuilder/modules/common/ApiBuilderGet/types'
import { TApiBuilderPath as TPath } from '@/common/builders/ApiBuilder/types/common'
import { TApiBuilderGetConfig as TGetConfig } from '@/common/builders/ApiBuilder/types/configs'

const createUrl = (path: TPath): string => {
  return `${BASE_URL}${path}`
}

const buildRequest = (config: TGetConfig): TGetRequest => {
  const request: TGetRequest = {
    type: 'GET',
    url: createUrl(config.path),
  }

  if (config.queryParams) request.queryParams = config.queryParams

  return request
}

export const ApiBuilderJsonPlaceholderGetRequestHelpers = { buildRequest }
