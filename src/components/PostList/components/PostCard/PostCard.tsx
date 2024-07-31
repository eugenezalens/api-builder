'use client'

import React, { FC, MouseEvent, useState } from 'react'

import { IComment } from '@/api/jsonPlaceholder/comments/models'
import { getCommentList } from '@/api/jsonPlaceholder/comments/requests'
import { IPost } from '@/api/jsonPlaceholder/posts/models'
import { CommentList } from '@/components'

import styles from './PostCard.module.css'

const PostCard: FC<IPost> = ({ id, title, body }) => {
  const [commentList, setCommentList] = useState<IComment[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCardClick = (event: MouseEvent<HTMLDivElement>): void => {
    ;(async () => {
      event.stopPropagation()

      if (isLoading) return
      if (commentList.length) return

      setIsLoading(true)
      const fetchedCommentList = await getCommentList({ postId: id, _limit: 3 })

      setCommentList(fetchedCommentList)
      setIsLoading(false)
    })()
  }

  return (
    <div
      className={styles.wrapper}
      onClick={handleCardClick}
    >
      <div className={styles.header}>{title}</div>

      <div>{body}</div>

      {isLoading ? (
        <div className={styles.footer}>
          <div className={styles.commentsTitle}>Comments:</div>

          <CommentList
            commentList={commentList}
            isLoading
          />
        </div>
      ) : null}

      {commentList.length ? (
        <div className={styles.footer}>
          <div className={styles.commentsTitle}>Comments:</div>

          <CommentList commentList={commentList} />
        </div>
      ) : null}
    </div>
  )
}

PostCard.displayName = 'PostCard'

export default PostCard
