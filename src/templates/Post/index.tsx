/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import sanitizeHtml from 'sanitize-html'

import { Container } from 'components'

import * as S from './styles'
import Link from 'next/link'

export type PostTemplateProps = {
  slug?: string
  title: string
  content: string
  updatedAt: string
  isPreview?: boolean
}

export const PostTemplate = ({
  title,
  content,
  updatedAt,
  isPreview = false,
}: PostTemplateProps) => {
  return (
    <Container>
      <S.Article>
        <S.Title>{title}</S.Title>
        <S.Time>{updatedAt}</S.Time>
        <S.Content
          isPreview={isPreview}
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
        />

        {isPreview && (
          <Link href="/">
            <a>
              <S.PreviewSubscribeButton role="button">
                <p>
                  Wanna continue reading? <span>Subscribe now</span>
                </p>
                <img src="/images/happy-face.svg" alt="happy face" />
              </S.PreviewSubscribeButton>
            </a>
          </Link>
        )}
      </S.Article>
    </Container>
  )
}
