import { query as q } from 'faunadb'
import { fauna } from './fauna'
import { getSubscription } from 'services/stripe'
import { getUserRefByStripeCustomerId } from 'services/fauna'

export const saveSubscription = async (
  subscriptionId: string,
  customerId: string
): Promise<void> => {
  const customerRef = await getUserRefByStripeCustomerId(customerId)
  const subscription = await getSubscription(subscriptionId)
  const subscriptionData = { ...subscription, userId: customerRef }

  return fauna.query(
    q.Create(q.Collection('subscriptions'), { data: subscriptionData })
  )
}
