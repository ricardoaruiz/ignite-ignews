import Link from 'next/link'
import { useRouter } from 'next/router'

import { GitHubSigninButton } from 'components/GitHubSigninButton'

import * as S from './styles'

export const Header = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.HeaderContent>
        <S.Content>
          <img src="/images/logo.svg" alt="ig.news" />

          <S.HeaderNav>
            <Link href="/" passHref>
              <S.NavItem isActive={router.pathname === '/'}>Home</S.NavItem>
            </Link>
            <Link href="posts" passHref>
              <S.NavItem isActive={router.pathname === '/posts'}>
                Posts
              </S.NavItem>
            </Link>
          </S.HeaderNav>
        </S.Content>
        <GitHubSigninButton />
      </S.HeaderContent>
    </S.Wrapper>
  )
}
