import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { getPost } from 'services/prismic'
import { PostTemplate, PostTemplateProps } from 'templates/Post'
import { getSession } from 'next-auth/client'

type PostPageProps = {
  post: PostTemplateProps
}

export default function Post({ post }: PostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>

      <PostTemplate {...post} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params
  const session = await getSession({ req })

  if (!session || !session.subscription) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }

  const post = await getPost(String(slug), req)

  return {
    props: {
      post,
    },
  }
}
