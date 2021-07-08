import { query as q } from 'faunadb'
import { fauna } from './fauna'

type User = {
  ref: {
    id: string
  }
  data: UserData
}

type UserData = {
  id?: string
  email?: string
  stripe_custome_id?: string
}

/**
 * Get a user by email
 * @param email string
 * @returns user: UserData
 */
export const getUserByEmail = async (email: string): Promise<UserData> => {
  const foundUser = await fauna.query<User>(
    q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
  )
  const {
    ref: { id },
    data: { stripe_custome_id },
  } = foundUser
  return {
    id,
    email,
    stripe_custome_id,
  }
}

/**
 * Create new user or return existing user by email
 * @param user: UserData
 * @returns user: UserData
 */
export const createOrGetUser = async (user: UserData): Promise<UserData> => {
  const createdUser = await fauna.query<User>(
    q.If(
      q.Not(
        q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
      ),
      q.Create(q.Collection('users'), { data: { email: user.email } }),
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
    )
  )
  const {
    ref: { id },
    data: { email, stripe_custome_id },
  } = createdUser
  return {
    id,
    email,
    stripe_custome_id,
  }
}

/**
 * Update a user
 * @param id: string
 * @param user: UserData
 * @returns user: UserData
 */
export const updateUser = async (
  id: string,
  user: UserData
): Promise<UserData> => {
  const updatedUser = await fauna.query<User>(
    q.Update(q.Ref(q.Collection('users'), id), {
      data: { ...user },
    })
  )
  const {
    data: { email, stripe_custome_id },
  } = updatedUser
  return {
    id,
    email,
    stripe_custome_id,
  }
}
