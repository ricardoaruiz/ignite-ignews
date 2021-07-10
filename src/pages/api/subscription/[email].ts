import { NextApiRequest, NextApiResponse } from 'next'
import { getActiveSubscriptionByEmail } from 'services/fauna'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { email } = req.query

    const subscription = await getActiveSubscriptionByEmail(String(email))

    return res.json({ hasActiveSubscription: subscription !== null })
  }

  res.setHeader('Allow', 'GET')
  return res.status(405).end('Method not allowed')
}
