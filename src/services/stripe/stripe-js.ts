import { loadStripe } from '@stripe/stripe-js'

export const getStripeJs = async () => {
  const stripeJs = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )

  return stripeJs
}
