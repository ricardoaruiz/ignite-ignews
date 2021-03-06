import Stripe from 'stripe'
// import { version } from '../../../package.json'

// https://stripe.com/docs/api

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
  },
})

export default stripe
