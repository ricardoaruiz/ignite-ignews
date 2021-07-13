import Stripe from 'stripe'
import stripeClient from './stripe'
import { Customer } from './types'

export const createCustomer = async (
  customer: Customer
): Promise<Stripe.Customer> => {
  return stripeClient.customers.create(customer)
}
