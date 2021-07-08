import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const user = [
    { id: 1, name: 'Rick1' },
    { id: 2, name: 'Rick2' },
    { id: 3, name: 'Rick3' },
    { id: 4, name: 'Rick4' },
  ]
  response.json(user)
}
