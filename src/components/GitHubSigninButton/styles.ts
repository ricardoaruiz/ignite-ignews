import styled, { css, DefaultTheme } from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos'
import { CloseOutline } from '@styled-icons/evaicons-outline'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 22rem;
    height: 4.8rem;
    border: 0;
    border-radius: 4.8rem;
    background-color: ${theme.colors.gray850};
    color: ${theme.colors.gray100};
    transition: filter 0.2s;

    span {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 1.9rem;
      margin-left: 1.6rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  `};
`

// Icon
type GitHubIcon = {
  isLogged?: boolean
}

const githubIconModifiers = {
  logged: (theme: DefaultTheme) => css`
    color: ${theme.colors.green500};
  `,
  unlogged: (theme: DefaultTheme) => css`
    color: ${theme.colors.yellow500};
  `,
}

export const GitHubIcon = styled(Github)<GitHubIcon>`
  ${({ theme, isLogged }) => css`
    width: 2.4rem;
    height: 2.4rem;
    ${isLogged
      ? githubIconModifiers.logged(theme)
      : githubIconModifiers.unlogged(theme)};
  `}
`

export const CloseIcon = styled(CloseOutline)`
  width: 2rem;
  height: 2rem;
  margin-left: 1.6rem;
`
