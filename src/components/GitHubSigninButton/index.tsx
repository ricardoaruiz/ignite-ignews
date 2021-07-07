import React from 'react'

import * as S from './styles'

type GitHubSigninButtonProps = {
  isLogged?: boolean
  loggedUser?: string
}

export const GitHubSigninButton = ({
  isLogged = false,
  loggedUser = '',
}: GitHubSigninButtonProps) => {
  return (
    <S.Button type="button">
      <S.GitHubIcon isLogged={isLogged} />
      <span>{!isLogged ? 'Sing in with GitHub' : loggedUser}</span>
      {isLogged && <S.CloseIcon />}
    </S.Button>
  )
}
