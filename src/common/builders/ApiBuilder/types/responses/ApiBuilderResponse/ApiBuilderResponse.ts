import {
  TApiBuilderSuccessResponse as TSuccessResponse,
  TApiBuilderErrorResponse as TErrorResponse,
  TApiBuilderUnknownResponse as TUnknownResponse,
} from '@/common/builders/ApiBuilder/types/responses'

export type TApiBuilderResponse<D = any> = TSuccessResponse<D> | TErrorResponse | TUnknownResponse
