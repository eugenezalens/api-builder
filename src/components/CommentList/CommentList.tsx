import React, { FC } from 'react'

import { IComment } from '@/api/jsonPlaceholder/comments/models'
import { CommentCard, CommentCardSkeleton } from '@/components/CommentList/components'

import styles from './CommentList.module.css'

interface IProps {
  commentList: IComment[]
  isLoading?: boolean
}

const CommentList: FC<IProps> = ({ commentList, isLoading }) => {
  if (isLoading) {
    return (
      <ul className={styles.wrapper}>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
      </ul>
    )
  }

  return (
    <ul className={styles.wrapper}>
      {commentList.map((comment) => (
        <CommentCard
          key={comment.id}
          {...comment}
        />
      ))}
    </ul>
  )
}

CommentList.displayName = 'CommentList'

export default CommentList
