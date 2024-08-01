import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from './PostCardSkeleton.module.css'

const PostCardSkeleton: FC = () => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.header}>
        <Skeleton width={'65%'} />
      </div>

      <div>
        <Skeleton width={'100%'} />
        <Skeleton width={'78%'} />
      </div>

      <div></div>
    </li>
  )
}

PostCardSkeleton.displayName = 'PostCardSkeleton'

export default PostCardSkeleton
