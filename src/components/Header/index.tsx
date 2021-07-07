import React from 'react'

import { GitHubSigninButton } from 'components/GitHubSigninButton'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContent>
        <S.Content>
          <img src="/images/logo.svg" alt="ig.news" />
          <S.HeaderNav>
            <S.NavItem href="#" isActive>
              Home
            </S.NavItem>
            <S.NavItem href="#">Posts</S.NavItem>
          </S.HeaderNav>
        </S.Content>
        <GitHubSigninButton />
      </S.HeaderContent>
    </S.Wrapper>
  )
}
