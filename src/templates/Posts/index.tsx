import Link from 'next/link'
import { Container } from 'components'

import * as S from './styles'

const PostsTemplate = () => {
  return (
    <Container>
      <S.PostList>
        <Link href="#">
          <S.Post>
            <S.Time>12 de março de 2021</S.Time>
            <S.Title>Creating a Monorepo with Lerna & Yarn Workspaces</S.Title>
            <S.Disclamer>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </S.Disclamer>
          </S.Post>
        </Link>
        <Link href="#">
          <S.Post>
            <S.Time>12 de março de 2021</S.Time>
            <S.Title>Creating a Monorepo with Lerna & Yarn Workspaces</S.Title>
            <S.Disclamer>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </S.Disclamer>
          </S.Post>
        </Link>
        <Link href="#">
          <S.Post>
            <S.Time>12 de março de 2021</S.Time>
            <S.Title>Creating a Monorepo with Lerna & Yarn Workspaces</S.Title>
            <S.Disclamer>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </S.Disclamer>
          </S.Post>
        </Link>
      </S.PostList>
    </Container>
  )
}

export default PostsTemplate
