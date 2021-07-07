import styled, { css } from 'styled-components'

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
