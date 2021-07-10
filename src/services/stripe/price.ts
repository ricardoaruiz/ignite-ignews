import { stripe } from './stripe'
import { Price } from './types'

export const getPrice = async (priceId: string): Promise<Price> => {
  const { id, unit_amount } = await stripe.prices.retrieve(priceId)
  return { id, unit_amount }
}
