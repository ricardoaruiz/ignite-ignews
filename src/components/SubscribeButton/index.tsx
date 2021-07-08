import React from 'react'
import { useSession, signIn } from 'next-auth/client'

import { checkout } from 'services/api'
import { getStripeJs } from 'services/stripe'

import * as S from './styles'

type SubscribeButtonProps = {
  priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession()

  const handleSubscribe = React.useCallback(async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const { sessionId } = await checkout(priceId)
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      console.log('Erro ao realizar o checkout', error)
    }
  }, [priceId, session])

  return (
    <S.SubscribeButton type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.SubscribeButton>
  )
}
