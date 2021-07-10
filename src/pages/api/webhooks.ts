/* eslint-disable no-case-declarations */
// https://stripe.com/docs/stripe-cli
// https://stripe.com/docs/webhooks/integration-builder
// https://stripe.com/docs/testing#cards

import { NextApiRequest, NextApiResponse } from 'next'
import { saveSubscription } from 'services/fauna/subscription'
import { stripe } from 'services/stripe'
import { Readable } from 'stream'
import Stripe from 'stripe'

// Desabilita o entendimento padrão do Next sobre como a resposta é
// recebida, por padrão seria JSON, mas nesse caso será uma Stream
export const config = {
  api: {
    bodyParser: false,
  },
}

// Transaforma a resposta enviada pelo webhook em algo legível
const buffer = async (readable: Readable) => {
  const chunks = []

  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

// Define quais eventos recebidos pelo webhook serão tratados
const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
])

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    try {
      const buf = await buffer(request)
      const secret = request.headers['stripe-signature']
      const event = stripe.webhooks.constructEvent(
        buf,
        secret,
        process.env.STRIPE_WEBHOOK_SECRET
      )

      if (relevantEvents.has(event.type)) {
        switch (event.type) {
          case 'customer.subscription.created':
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription

            await saveSubscription(
              subscription.id,
              subscription.customer.toString(),
              event.type === 'customer.subscription.created'
            )

            break

          case 'checkout.session.completed':
            const checkoutSession = event.data.object as Stripe.Checkout.Session

            await saveSubscription(
              checkoutSession.subscription.toString(),
              checkoutSession.customer.toString(),
              true
            )

            break
          default:
            throw new Error('Unhandled event.')
        }
      }

      return response.json({ recebived: 'OK' })
    } catch (error) {
      return response.json({ error: 'Webhook handler failed.' })
    }
  }

  response.setHeader('Allow', 'POST')
  response.status(405).end('Method not allowed')
}
