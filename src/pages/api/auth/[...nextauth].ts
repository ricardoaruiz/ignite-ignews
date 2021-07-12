import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { createOrGetUser, getActiveSubscriptionByEmail } from 'services/fauna'

// https://next-auth.js.org/getting-started/introduction
// https://next-auth.js.org/getting-started/example
// https://next-auth.js.org/getting-started/client
// https://next-auth.js.org/getting-started/rest-api

export default NextAuth({
  // https://next-auth.js.org/providers/github
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn(user) {
      try {
        await createOrGetUser(user)
        return true
      } catch (error) {
        console.log('error', error)
        return false
      }
    },
    async session(session, user) {
      try {
        const subscription = await getActiveSubscriptionByEmail(user.email)
        return { ...session, subscription }
      } catch {
        return session
      }
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})
