// https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript

import Prismic from '@prismicio/client'

export const getPrismicClient = (req?: unknown) => {
  return Prismic.client(process.env.PRISMIC_URL, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
  })
}
