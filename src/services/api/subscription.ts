import { api } from './api'
import { HasActiveSubscriptionResponse } from './types'

export const hasActiveSubscription = async (
  email: string
): Promise<boolean> => {
  const { data } = await api.get<HasActiveSubscriptionResponse>(
    `subscription/${email}`
  )
  return data.hasActiveSubscription
}
