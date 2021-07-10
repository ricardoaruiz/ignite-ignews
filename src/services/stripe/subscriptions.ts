import { stripe } from './stripe'
import { Subscription } from './types'

export const getSubscription = async (
  subscriptionId: string
): Promise<Subscription> => {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  const { id, status, items } = subscription
  return {
    id,
    status,
    priceId: items.data[0].price.id,
  }
}
