import { AxiosError } from 'axios'

import {
  TApiBuilderUnknownResponse as TUnknown,
  TApiBuilderSuccessResponse as TSuccess,
  TApiBuilderErrorResponse as TError,
} from '@/common/builders/ApiBuilder/types/responses'

const createUnknown = (): TUnknown => {
  return {
    type: 'unknown',
  }
}

const createSuccess = <D = any>(data: D): TSuccess<D> => {
  return {
    type: 'success',
    data,
  }
}

const createError = (error: AxiosError): TError => {
  return {
    type: 'error',
    error,
  }
}

export const ApiBuilderResponseHelpers = { createUnknown, createSuccess, createError }
