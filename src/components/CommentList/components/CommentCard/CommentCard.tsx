import React, { FC } from 'react'

import { IComment } from '@/api/jsonPlaceholder/comments/models'

import styles from './CommentCard.module.css'

const CommentCard: FC<IComment> = ({ name, body, email }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
      </div>

      <div className={styles.body}>{body}</div>

      <div className={styles.footer}>{email}</div>
    </div>
  )
}

CommentCard.displayName = 'CommentCard'

export default CommentCard
