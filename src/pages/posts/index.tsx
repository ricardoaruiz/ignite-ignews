import Head from 'next/head'
import PostsTemplate from 'templates/Posts'

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | ig news</title>
      </Head>

      <PostsTemplate />
    </>
  )
}

export default Posts
