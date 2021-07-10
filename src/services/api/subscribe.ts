import { api } from './api'
import { CheckoutData, SubscribeResponse } from './types'

export const checkout = async (priceId: string): Promise<CheckoutData> => {
  const {
    data: { sessionId, isAlreadySubscribed },
  } = await api.post<SubscribeResponse>(`/subscribe/${priceId}`)

  return { sessionId, isAlreadySubscribed }
}
