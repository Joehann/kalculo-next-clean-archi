export type User = {
  uuid?: string
  email: string
  password?: string
  cguAccepted?: boolean
  marketingAccepted?: boolean
  isSubscriptionActive?: boolean
  subscriptionDate?: Date
  subscriptionEndDate?: Date | null
}
