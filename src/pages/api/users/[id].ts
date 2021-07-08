import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  const users = [
    { id: 1, name: 'Rick1' },
    { id: 2, name: 'Rick2' },
    { id: 3, name: 'Rick3' },
    { id: 4, name: 'Rick4' },
  ]
  response.json(users.filter((user) => user.id === Number(id)))
}
