import React from 'react'

import styles from './styles.module.scss'

type GitHubSigninButtonProps = {
  isLogged?: boolean
  loggedUser?: string
}

export const GitHubSigninButton = ({
  isLogged = false,
  loggedUser = '',
}: GitHubSigninButtonProps) => {
  return (
    <button type="button" className={styles.button}>
      <img
        src={`/images/${isLogged ? 'github-logged.svg' : 'github.svg'}`}
        alt="github"
      />
      <span>{!isLogged ? 'Sing in with GitHub' : loggedUser}</span>
      {isLogged && (
        <img src="/images/close.svg" alt="logoff" className={styles.close} />
      )}
    </button>
  )
}
