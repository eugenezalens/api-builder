import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from './CommentCardSkeleton.module.css'

const CommentCardSkeleton: FC = () => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.header} />

      <div>
        <Skeleton width={'100%'} />
        <Skeleton width={'35%'} />
      </div>

      <div className={styles.footer}>
        <Skeleton width={'50%'} />
      </div>
    </li>
  )
}

CommentCardSkeleton.displayName = 'CommentCardSkeleton'

export default CommentCardSkeleton
