import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { fauna } from 'services/fauna'
import { stripe } from 'services/stripe'
import { query as q } from 'faunadb'

// https://stripe.com/docs/api/checkout/sessions/create

type User = {
  ref: {
    id: string
  }
  data: {
    stripe_custome_id?: string
  }
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { priceId } = request.query
    const session = await getSession({ req: request })

    const faunaCustomer = await fauna.query<User>(
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session.user.email)))
    )

    let customerId = faunaCustomer.data.stripe_custome_id

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
      })
      customerId = stripeCustomer.id

      await fauna.query(
        q.Update(q.Ref(q.Collection('users'), faunaCustomer.ref.id), {
          data: { stripe_custome_id: customerId },
        })
      )
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId, // id do cliente
      payment_method_types: ['card'], // formas de pagamento aceitas na transação
      billing_address_collection: 'required', // indica se é necessário que o usuário informe o endereço
      line_items: [{ price: String(priceId), quantity: 1 }], // informa os itens que estão sendo comprados
      mode: 'subscription', // indica se o pagamento será recorrente ou único
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL, //url que será redirecionado após o sucesso na compra
      cancel_url: process.env.STRIPE_CANCEL_URL, //url que será redirecinado caso ocorra um erro na compra
    })

    return response.status(200).json({ sessionId: stripeCheckoutSession.id })
  }

  response.setHeader('Allow', 'POST')
  return response.status(405).end('Method not allowed')
}
