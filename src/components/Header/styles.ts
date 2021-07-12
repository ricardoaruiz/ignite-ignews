import styled, { css } from 'styled-components'

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

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 4rem;
  }
`
