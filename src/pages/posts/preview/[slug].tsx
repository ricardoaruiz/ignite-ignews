import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { getPosts, getPost } from 'services/prismic'
import { PostTemplate, PostTemplateProps } from 'templates/Post'

type PostPageProps = {
  post: PostTemplateProps
}

export default function Post({ post }: PostPageProps) {
  const router = useRouter()
  const [session] = useSession()

  React.useEffect(() => {
    if (session?.subscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [post, router, session])

  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>

      <PostTemplate {...post} isPreview />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const post = await getPost({ id: String(slug), isPreview: true })

  return {
    props: {
      post,
    },
  }
}
