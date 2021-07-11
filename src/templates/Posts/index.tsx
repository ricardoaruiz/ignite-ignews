import Link from 'next/link'
import { Container } from 'components'

import * as S from './styles'
import { Post } from 'services/prismic/types'

export type PostsTemplateProps = {
  posts: Post[]
}

export default function PostsTemplate({ posts }: PostsTemplateProps) {
  return (
    <Container>
      <S.PostList>
        {posts.map(({ slug, updatedAt, title, content }) => (
          <Link href={`/posts/${slug}`} key={slug}>
            <S.Post>
              <S.Time>{updatedAt}</S.Time>
              <S.Title>{title}</S.Title>
              <S.Excerpt>{content}</S.Excerpt>
            </S.Post>
          </Link>
        ))}
      </S.PostList>
    </Container>
  )
}
