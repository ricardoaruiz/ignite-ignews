import React from 'react'
import * as S from './styles'

type SubscribeButtonProps = {
  priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const handleSubscribe = React.useCallback(() => {
    console.log('priceId', priceId)
  }, [priceId])

  return (
    <S.SubscribeButton type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.SubscribeButton>
  )
}
