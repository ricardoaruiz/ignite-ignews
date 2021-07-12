export type CheckoutSession = {
  id: string
}

export type Customer = {
  email: string
}

export type Price = {
  id: string
  unit_amount: number
}

export type Subscription = {
  id: string
  status: string
  priceId: string
}
