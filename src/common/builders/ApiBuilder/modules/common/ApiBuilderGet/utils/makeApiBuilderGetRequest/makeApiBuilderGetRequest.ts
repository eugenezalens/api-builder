import axios, { isAxiosError } from 'axios'

import { TApiBuilderGetRequest as TGetRequest } from '@/common/builders/ApiBuilder/modules/common/ApiBuilderGet/types'
import { TApiBuilderResponse as TResponse } from '@/common/builders/ApiBuilder/types/responses'
import { ApiBuilderResponseHelpers as ResponseHelpers } from '@/common/builders/ApiBuilder/utils/helpers'

export const makeApiBuilderGetRequest = async <D = any>({ url, queryParams }: TGetRequest): Promise<TResponse<D>> => {
  try {
    const res = await axios.get<D>(url, { params: queryParams })

    return ResponseHelpers.createSuccess<D>(res.data)
  } catch (e) {
    if (isAxiosError(e)) {
      return ResponseHelpers.createError(e)
    }

    return ResponseHelpers.createUnknown()
  }
}
