import { Container, SubscribeButton } from 'components'

import * as S from './styles'

export const HomeTemplate = () => {
  return (
    <Container>
      <S.Main>
        <S.TextSection>
          <S.Wellcome>
            <img src="/images/hands.svg" alt="mãos batendo palmas" />
            <span>Hey, welcome</span>
          </S.Wellcome>

          <S.Title>
            News about
            <br />
            the <span>React</span> world
          </S.Title>

          <S.Disclaimer>
            Get acess to all the publications <span>for $9.90 month</span>
          </S.Disclaimer>

          <SubscribeButton />
        </S.TextSection>

        <S.IlustrationSection>
          <img
            src="/images/avatar.svg"
            alt="mulher sentada em uma mesa utilizando seu notebook"
          />
        </S.IlustrationSection>
      </S.Main>
    </Container>
  )
}
