import { stripe } from './stripe'

type Price = {
  id: string
  unit_amount: number
}

export const getPrice = async (priceId: string): Promise<Price> => {
  const { id, unit_amount } = await stripe.prices.retrieve(priceId)
  return { id, unit_amount }
}
