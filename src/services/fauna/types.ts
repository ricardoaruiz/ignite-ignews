export type User = {
  ref: {
    id: string
  }
  data: UserData
}

export type UserData = {
  id?: string
  email?: string
  stripe_customer_id?: string
}
