import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { Container } from 'components'
import { Post } from 'services/prismic/types'

import * as S from './styles'

export type PostsTemplateProps = {
  posts: Post[]
}

export default function PostsTemplate({ posts }: PostsTemplateProps) {
  const [session] = useSession()

  return (
    <Container>
      <S.PostList>
        {posts.map(({ slug, updatedAt, title, content }) => (
          <Link
            href={`/posts/${session?.subscription ? slug : `preview/${slug}`}`}
            key={slug}
          >
            <a>
              <S.Post>
                <S.Time>{updatedAt}</S.Time>
                <S.Title>{title}</S.Title>
                <S.Excerpt>{content}</S.Excerpt>
              </S.Post>
            </a>
          </Link>
        ))}
      </S.PostList>
    </Container>
  )
}
