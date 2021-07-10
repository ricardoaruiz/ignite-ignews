// https://stripe.com/docs/stripe-cli
// https://stripe.com/docs/webhooks/integration-builder

import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from 'services/stripe'
import { Readable } from 'stream'

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
const relevantEvents = new Set(['checkout.session.completed'])

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
        console.log('evento recebido', event)
      }

      return response.json({ recebived: 'OK' })
    } catch (error) {
      return response.status(400).send(`Webhook error: ${error.message}`)
    }
  }

  response.setHeader('Allow', 'POST')
  response.status(405).end('Method not allowed')
}
