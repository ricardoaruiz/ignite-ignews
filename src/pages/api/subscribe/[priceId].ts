import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import {
  getActiveSubscription,
  getUserByEmail,
  updateUser,
} from 'services/fauna'
import { createCustomer, createCheckoutSession } from 'services/stripe'

// https://stripe.com/docs/api/checkout/sessions/create

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    // Get price id received on http request
    const { priceId } = request.query

    // Get logged user by next-auth
    const { user: loggedUser, subscription } = await getSession({
      req: request,
    })

    const faunaCustomer = await getUserByEmail(loggedUser.email)
    let customerId = faunaCustomer.stripe_customer_id

    if (!customerId) {
      const stripeCustomer = await createCustomer({
        email: loggedUser.email,
      })
      customerId = stripeCustomer.id

      await updateUser(faunaCustomer.id, {
        stripe_customer_id: customerId,
      })
    }

    try {
      if (!subscription) {
        const stripeCheckoutSession = await createCheckoutSession({
          customer: customerId, // id do cliente no stripe
          payment_method_types: ['card'], // formas de pagamento aceitas na transação
          billing_address_collection: 'required', // indica se é necessário que o usuário informe o endereço
          line_items: [{ price: String(priceId), quantity: 1 }], // informa os itens que estão sendo comprados
          mode: 'subscription', // indica se o pagamento será recorrente ou único
          allow_promotion_codes: true,
          success_url: process.env.STRIPE_SUCCESS_URL, //url que será redirecionado após o sucesso na compra
          cancel_url: process.env.STRIPE_CANCEL_URL, //url que será redirecinado caso ocorra um erro na compra
        })
        return response
          .status(200)
          .json({ sessionId: stripeCheckoutSession.id })
      }

      return response.status(200).json({ isAlreadySubscribed: true })
    } catch (error) {
      return response.status(400).json({ Ok: false })
    }
  }

  response.setHeader('Allow', 'POST')
  return response.status(405).end('Method not allowed')
}
