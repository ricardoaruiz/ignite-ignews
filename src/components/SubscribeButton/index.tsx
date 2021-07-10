import React from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/client'

import { checkout } from 'services/api'
import { getStripeJs } from 'services/stripe'

import * as S from './styles'

type SubscribeButtonProps = {
  priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const history = useRouter()
  const [session] = useSession()

  const handleSubscribe = React.useCallback(async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const { sessionId, isAlreadySubscribed } = await checkout(priceId)

      if (!isAlreadySubscribed) {
        const stripe = await getStripeJs()
        await stripe.redirectToCheckout({ sessionId })
      }
      history.push('/posts')
    } catch (error) {
      console.log('Erro ao realizar o checkout', error)
    }
  }, [history, priceId, session])

  return (
    <S.SubscribeButton type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.SubscribeButton>
  )
}
