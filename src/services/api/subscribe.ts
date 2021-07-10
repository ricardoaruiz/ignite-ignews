import { api } from './api'

type SubscribeResponse = {
  sessionId?: string
  isAlreadySubscribed?: boolean
}

type CheckoutData = {
  sessionId?: string
  isAlreadySubscribed?: boolean
}

export const checkout = async (priceId: string): Promise<CheckoutData> => {
  const {
    data: { sessionId, isAlreadySubscribed },
  } = await api.post<SubscribeResponse>(`/subscribe/${priceId}`)

  return { sessionId, isAlreadySubscribed }
}
