import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPosts } from 'services/prismic'
import PostsTemplate, { PostsTemplateProps } from 'templates/Posts'

export default function Posts({ posts }: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>Posts | ig news</title>
      </Head>

      <PostsTemplate posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60,
  }
}
