import Stripe from 'stripe'
import stripeClient from './stripe'
import { CheckoutSession } from './types'

export const createCheckoutSession = async (
  checkoutSession: Stripe.Checkout.SessionCreateParams
): Promise<CheckoutSession> => {
  const { id } = await stripeClient.checkout.sessions.create(checkoutSession)
  return { id }
}
