import { query as q } from 'faunadb'
import { fauna } from './fauna'
import { getStripeSubscription } from 'services/stripe'
import { getUserRefByStripeCustomerId } from 'services/fauna'
import { Subscription } from 'services/fauna/types'

export const getActiveSubscriptionByEmail = async (
  email: string
): Promise<Subscription | null> => {
  return fauna.query(
    q.If(
      q.Exists(
        q.Match(
          q.Index('subscription_by_userId_status'),
          q.Select(
            'ref',
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
          ),
          'active'
        )
      ),
      q.Get(
        q.Match(
          q.Index('subscription_by_userId_status'),
          q.Select(
            'ref',
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
          ),
          'active'
        )
      ),
      null
    )
  )
}

export const getActiveSubscription = async (
  customerId: string,
  priceId
): Promise<Subscription | null> => {
  return fauna.query<Subscription>(
    q.If(
      q.Exists(
        q.Match(
          q.Index('subscription_by_userId_priceId_status'),
          q.Select(
            'ref',
            q.Get(q.Match(q.Index('user_by_stripe_customer_id'), customerId))
          ),
          priceId,
          'active'
        )
      ),
      q.Get(
        q.Match(
          q.Index('subscription_by_userId_priceId_status'),
          q.Select(
            'ref',
            q.Get(q.Match(q.Index('user_by_stripe_customer_id'), customerId))
          ),
          priceId,
          'active'
        )
      ),
      null
    )
  )
}

export const saveSubscription = async (
  subscriptionId: string,
  customerId: string,
  createAction = false
): Promise<void> => {
  const customerRef = await getUserRefByStripeCustomerId(customerId)
  const stripeSubscription = await getStripeSubscription(subscriptionId)

  const faunaSubscriptionData = { ...stripeSubscription, userId: customerRef }

  if (createAction) {
    return fauna.query(
      q.Create(q.Collection('subscriptions'), {
        data: faunaSubscriptionData,
      })
    )
  }

  return fauna.query(
    q.Replace(
      q.Select(
        'ref',
        q.Get(q.Match(q.Index('subscription_by_id'), subscriptionId))
      ),
      { data: faunaSubscriptionData }
    )
  )
}
