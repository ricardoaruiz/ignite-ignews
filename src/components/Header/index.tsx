import React from 'react'

import { GitHubSigninButton } from 'components/GitHubSigninButton'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.content}>
          <img src="/images/logo.svg" alt="ig.news" />
          <nav>
            <a href="#" className={styles.active}>
              Home
            </a>
            <a href="#">Posts</a>
          </nav>
        </div>
        <GitHubSigninButton />
      </div>
    </header>
  )
}
