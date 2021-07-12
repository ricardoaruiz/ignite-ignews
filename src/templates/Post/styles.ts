import styled, { css, DefaultTheme } from 'styled-components'

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

type ContentProps = {
  isPreview?: boolean
}

const contentModifiers = {
  preview: (theme: DefaultTheme) => css`
    background: linear-gradient(${theme.colors.gray100}, transparent);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isPreview = false }) => css`
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

    ${isPreview && contentModifiers.preview(theme)};
  `};
`
export const PreviewSubscribeButton = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    border-radius: 8rem;
    background-color: ${theme.colors.gray850};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.8rem;
    cursor: pointer;
    transition: filter 0.3s;

    p {
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-right: 1.6rem;

      span {
        color: ${theme.colors.yellow500};
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  `};
`
