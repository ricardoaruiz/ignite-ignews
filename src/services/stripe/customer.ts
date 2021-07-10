import Stripe from 'stripe'
import { stripe } from './stripe'
import { Customer } from './types'

export const createCustomer = async (
  customer: Customer
): Promise<Stripe.Customer> => {
  return stripe.customers.create(customer)
}
