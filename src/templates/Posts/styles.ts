import styled, { css } from 'styled-components'

export const PostList = styled.div`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
`

export const Time = styled.time`
  ${({ theme }) => css`
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${theme.colors.gray300};
    margin-bottom: 1.6rem;
    display: block;
  `};
`

export const Title = styled.strong`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: ${theme.colors.white};
    margin-bottom: 0.5rem;
    display: block;
    transition: color 0.3s;
  `};
`

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${theme.colors.gray300};
  `};
`

export const Post = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: 3.2rem 0;
    cursor: pointer;

    & + a {
      border-top: 1px solid ${theme.colors.gray700};
    }

    &:hover {
      ${Title} {
        color: ${theme.colors.yellow500};
      }
    }
  `};
`
