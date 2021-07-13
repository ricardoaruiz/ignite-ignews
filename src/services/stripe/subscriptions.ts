import stripeClient from './stripe'
import { Subscription } from './types'

export const getStripeSubscription = async (
  subscriptionId: string
): Promise<Subscription> => {
  const subscription = await stripeClient.subscriptions.retrieve(subscriptionId)
  const { id, status, items } = subscription
  return {
    id,
    status,
    priceId: items.data[0].price.id,
  }
}
