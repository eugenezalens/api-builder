'use client'

import React, { FC, useEffect, useState } from 'react'

import { IPost } from '@/api/jsonPlaceholder/posts/models'
import { getPostList } from '@/api/jsonPlaceholder/posts/requests'
import { PostCard, PostCardSkeleton } from '@/components/PostList/components'

import styles from './PostList.module.css'

const PostList: FC = () => {
  const [postList, setPostList] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      const fetchedPostList = await getPostList({ _limit: 3 })
      setPostList(fetchedPostList)
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) {
    return (
      <ul className={styles.wrapper}>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </ul>
    )
  }

  return (
    <ul className={styles.wrapper}>
      {postList.map((post) => (
        <PostCard
          key={post.id}
          {...post}
        />
      ))}
    </ul>
  )
}

PostList.displayName = 'PostList'

export default PostList
