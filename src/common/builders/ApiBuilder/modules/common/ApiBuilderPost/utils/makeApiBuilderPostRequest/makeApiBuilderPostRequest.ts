import axios, { isAxiosError } from 'axios'

import { TApiBuilderPostRequest as TPostRequest } from '@/common/builders/ApiBuilder/modules/common/ApiBuilderPost/types'
import { TApiBuilderResponse as TResponse } from '@/common/builders/ApiBuilder/types/responses'
import { ApiBuilderResponseHelpers as ResponseHelpers } from '@/common/builders/ApiBuilder/utils/helpers'

export const makeApiBuilderPostRequest = async <D = any, P = any>({
  url,
  payload,
  queryParams,
}: TPostRequest): Promise<TResponse<D>> => {
  try {
    const res = await axios.post<D>(url, payload, { params: queryParams })

    return ResponseHelpers.createSuccess<D>(res.data)
  } catch (e) {
    if (isAxiosError(e)) {
      return ResponseHelpers.createError(e)
    }

    return ResponseHelpers.createUnknown()
  }
}
