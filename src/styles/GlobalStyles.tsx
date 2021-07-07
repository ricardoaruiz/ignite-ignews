import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.gray900};
      color: ${theme.colors.white};
      font-family: 'Roboto', sans-serif;
    }

    input,
    textarea,
    select,
    button {
      font-weight: 400;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `};
`
