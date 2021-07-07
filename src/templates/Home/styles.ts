import styled, { css } from 'styled-components'

export const Main = styled.main`
  height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextSection = styled.section`
  flex: 2;
`

export const IlustrationSection = styled.section`
  flex: 1;

  & img {
    width: 100%;
  }
`

export const Wellcome = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;

  & img {
    height: 2.6rem;
    width: 2.6rem;
    margin-right: 1.6rem;
  }

  & span {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: 900;
    font-size: 7.2rem;
    line-height: 7.2rem;
    max-width: 50.8rem;
    margin-bottom: 2.4rem;

    & span {
      color: ${theme.colors.cyano500};
    }
  `};
`

export const Disclaimer = styled.h2`
  ${({ theme }) => css`
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.6rem;
    max-width: 34.1rem;
    margin-bottom: 4rem;

    span {
      color: ${theme.colors.cyano500};
    }
  `};
`

export const SubscribeButton = styled.button`
  ${({ theme }) => css`
    height: 6.4rem;
    width: 26rem;
    border: 0;
    border-radius: 6.4rem;
    background-color: ${theme.colors.yellow500};
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.3rem;
    color: ${theme.colors.gray900};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `};
`
