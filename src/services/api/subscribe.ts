import { api } from './api'

type SubscribeResponse = {
  sessionId: string
}

type CheckoutData = {
  sessionId: string
}

export const checkout = async (priceId: string): Promise<CheckoutData> => {
  const {
    data: { sessionId },
  } = await api.post<SubscribeResponse>(`/subscribe/${priceId}`)

  return { sessionId }
}
