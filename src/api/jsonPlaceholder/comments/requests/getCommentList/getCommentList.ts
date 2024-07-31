import { IComment } from '@/api/jsonPlaceholder/comments/models'
import { makeRequest } from '@/common/builders/ApiBuilder'

interface IRequest {
  postId?: number
  _limit?: number
}

export const getCommentList = async (request?: IRequest): Promise<IComment[]> => {
  const res = await makeRequest<IComment[]>({
    type: 'GET',
    service: 'jsonPlaceholder',
    path: '/comments',
    queryParams: { ...(request ?? {}) },
  })

  if (res.type === 'success') {
    return res.data
  }

  if (res.type === 'error') {
    console.error('createPostList__ERROR', res.error)
  }

  return []
}
