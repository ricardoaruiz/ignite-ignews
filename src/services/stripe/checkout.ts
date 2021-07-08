import Stripe from 'stripe'
import { stripe } from './stripe'

type CheckoutSession = {
  id: string
}

export const createCheckoutSession = async (
  checkoutSession: Stripe.Checkout.SessionCreateParams
): Promise<CheckoutSession> => {
  const { id } = await stripe.checkout.sessions.create(checkoutSession)
  return { id }
}
