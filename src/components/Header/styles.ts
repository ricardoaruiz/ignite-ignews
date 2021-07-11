import styled, { css, DefaultTheme } from 'styled-components'

import { Container } from 'components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 8rem;
    border-bottom: 1px solid ${theme.colors.gray800};
  `};
`

export const HeaderContent = styled(Container)`
  height: 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderNav = styled.nav`
  nav {
    margin-left: 8rem;
    height: 8rem;
  }
`

type NavItemProps = {
  isActive?: boolean
}

const navItemModifuers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    font-weight: bold;

    &::after {
      position: absolute;
      content: '';
      bottom: 0.1rem;
      left: 0;
      width: 100%;
      height: 0.3rem;
      border-radius: 1rem 1rem 0 0;
      background-color: ${theme.colors.yellow500};
    }
  `,
}

export const NavItem = styled.a<NavItemProps>`
  ${({ theme, isActive }) => css`
    display: inline-block;
    position: relative;
    padding: 0 0.75rem;
    line-height: 8rem;
    color: ${theme.colors.gray300};
    transition: color 0.2s;
    font-size: 1.6rem;
    cursor: pointer;

    & + a {
      margin-left: 3rem;
    }

    &:hover {
      color: var(--white);
    }

    ${isActive && navItemModifuers.active(theme)};
  `};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 4rem;
  }
`
