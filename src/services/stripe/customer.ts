import Stripe from 'stripe'
import { stripe } from './stripe'

type Customer = {
  email: string
}

export const createCustomer = async (
  customer: Customer
): Promise<Stripe.Customer> => {
  return stripe.customers.create(customer)
}
