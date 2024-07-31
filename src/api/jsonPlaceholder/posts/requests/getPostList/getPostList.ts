import { IPost } from '@/api/jsonPlaceholder/posts/models'
import { makeRequest } from '@/common/builders/ApiBuilder'

interface IRequest {
  _page?: number
  _limit?: number
}

export const getPostList = async (request?: IRequest): Promise<IPost[]> => {
  const res = await makeRequest<IPost[]>({
    type: 'GET',
    service: 'jsonPlaceholder',
    path: '/posts',
    queryParams: { ...(request ?? {}) },
  })

  if (res.type === 'success') {
    return res.data
  }

  if (res.type === 'error') {
    console.error('getPostList__ERROR', res.error)
  }

  return []
}
