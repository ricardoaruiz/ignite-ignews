import Link from 'next/link'
import { useRouter } from 'next/router'

import { ActiveLink, GitHubSigninButton } from 'components'

import * as S from './styles'

export const Header = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.HeaderContent>
        <S.Content>
          <img src="/images/logo.svg" alt="ig.news" />

          <S.HeaderNav>
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/posts" prefetch>
              Posts
            </ActiveLink>
          </S.HeaderNav>
        </S.Content>
        <GitHubSigninButton />
      </S.HeaderContent>
    </S.Wrapper>
  )
}
