import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import * as S from './styles'

export const GitHubSigninButton = () => {
  const [session] = useSession()

  const handleSignIn = React.useCallback(() => {
    !session && signIn('github')
  }, [session])

  const handleSignOut = React.useCallback(() => {
    session && signOut()
  }, [session])

  return (
    <S.Button type="button" onClick={handleSignIn}>
      <S.GitHubIcon isLogged={!!session} />
      <span>{!session ? 'Sing in with GitHub' : session.user.name}</span>
      {session && <S.CloseIcon onClick={handleSignOut} />}
    </S.Button>
  )
}
