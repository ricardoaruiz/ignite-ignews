import { Container, SubscribeButton } from 'components'

import * as S from './styles'

type HomeTemplateProps = {
  product: Product
}

export type Product = {
  priceId: string
  amount: string
}

export const HomeTemplate = ({ product }: HomeTemplateProps) => {
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
            Get acess to all the publications{' '}
            <span>for {product.amount} month</span>
          </S.Disclaimer>

          <SubscribeButton priceId={product.priceId} />
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
