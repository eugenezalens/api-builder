import { NextPage } from 'next'
import Image from 'next/image'

import { PostList } from '@/components'

import styles from './page.module.css'

const Home: NextPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <Image
          width={60}
          height={60}
          src={'/assets/icons/logo_light-sky-blue.svg'}
          alt={'logo'}
          priority
        />
      </header>

      <main className={styles.main}>
        <PostList />
      </main>

      <footer className={styles.footer}>
        <span className={styles.credits}>@eugenezalens</span>
      </footer>
    </>
  )
}

Home.displayName = 'Home'

export default Home
