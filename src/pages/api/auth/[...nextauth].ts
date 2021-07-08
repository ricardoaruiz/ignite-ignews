import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { query as q } from 'faunadb'
import { fauna } from 'services/fauna'

// https://next-auth.js.org/getting-started/introduction
// https://next-auth.js.org/getting-started/example
// https://next-auth.js.org/getting-started/client
// https://next-auth.js.org/getting-started/rest-api

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection('users'), { data: { email: user.email } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        )
        return true
      } catch (error) {
        console.log('error', error)
        return false
      }
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})
