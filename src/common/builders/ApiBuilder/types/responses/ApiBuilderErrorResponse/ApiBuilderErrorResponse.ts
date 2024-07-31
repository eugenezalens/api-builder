import { AxiosError } from 'axios'

export type TApiBuilderErrorResponse = {
  type: 'error'
  error: AxiosError
}
