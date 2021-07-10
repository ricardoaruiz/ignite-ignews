export type SubscribeResponse = {
  sessionId?: string
  isAlreadySubscribed?: boolean
}

export type CheckoutData = {
  sessionId?: string
  isAlreadySubscribed?: boolean
}

export type HasActiveSubscriptionResponse = {
  hasActiveSubscription: boolean
}
