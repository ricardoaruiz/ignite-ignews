import stripeClient from './stripe'
import { Price } from './types'

export const getPrice = async (priceId: string): Promise<Price> => {
  const { id, unit_amount } = await stripeClient.prices.retrieve(priceId)
  return { id, unit_amount }
}
