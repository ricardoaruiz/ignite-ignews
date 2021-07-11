/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import sanitizeHtml from 'sanitize-html'

import { Container } from 'components'

import * as S from './styles'

export type PostTemplateProps = {
  slug?: string
  title: string
  content: string
  updatedAt: string
}

export const PostTemplate = ({
  title,
  content,
  updatedAt,
}: PostTemplateProps) => {
  return (
    <Container>
      <S.Article>
        <S.Title>{title}</S.Title>
        <S.Time>{updatedAt}</S.Time>
        <S.Content
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
        />
      </S.Article>
    </Container>
  )
}
