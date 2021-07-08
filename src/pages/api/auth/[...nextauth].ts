import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

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
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})
