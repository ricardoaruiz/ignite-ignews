import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { getPrice } from 'services/stripe'

import { HomeTemplate, Product } from 'templates/Home'
import { hasActiveSubscription } from 'services/api'

type HomeProps = {
  product: Product
}

export default function Home({ product }: HomeProps) {
  const history = useRouter()
  const [session] = useSession()

  React.useEffect(() => {
    const checkIfHasActiveSubscription = async () => {
      if (session?.user) {
        const hasSubscription = await hasActiveSubscription(session.user.email)
        if (hasSubscription) {
          history.push('/posts')
        }
      }
    }
    checkIfHasActiveSubscription()
  }, [history, session?.user])

  return (
    <>
      <Head>
        <title>Home | ig news</title>
      </Head>
      <HomeTemplate product={product} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await getPrice('price_1JAigcGyKjD8BZxZnqSuz2hE')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    revalidate: 60 * 60 * 24, // 24 hours
    props: {
      product,
    },
  }
}
