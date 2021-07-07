import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from 'services/stripe'

import { HomeTemplate, Product } from 'templates/Home'

type HomeProps = {
  product: Product
}

export default function Home({ product }: HomeProps) {
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
  const price = await stripe.prices.retrieve('price_1JAigcGyKjD8BZxZnqSuz2hE')

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
