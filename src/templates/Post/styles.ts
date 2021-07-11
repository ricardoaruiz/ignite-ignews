import styled, { css } from 'styled-components'

export const Article = styled.article`
  max-width: 72rem;
  width: 100%;
  margin: 8rem auto;
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 5.4rem;
    line-height: 6rem;
    color: ${theme.colors.white};
    margin-bottom: 2.4rem;
  `};
`

export const Time = styled.time`
  ${({ theme }) => css`
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${theme.colors.gray300};
    margin-bottom: 3.2rem;
    display: block;
  `};
`
export const Content = styled.div`
  ${({ theme }) => css`
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${theme.colors.gray300};

    p {
      margin-bottom: 2rem;
    }

    ul {
      padding: 2rem;

      li {
        margin: 0.5rem 0;
      }
    }

    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2.5rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
      margin-bottom: 2rem;
    }

    pre {
      background-color: ${theme.colors.gray850};
      padding: 1rem;
      border-radius: 0.5rem;
    }
  `};
`
