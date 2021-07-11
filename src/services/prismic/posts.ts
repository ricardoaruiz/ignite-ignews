import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { toDateString } from 'utils/date'
import { getPrismicClient } from './prismic'
import { Post } from './types'

export const getPosts = async (): Promise<Post[]> => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    }
  )

  return response.results.map(
    ({ uid, last_publication_date, data: { title, content } }) => {
      return {
        slug: uid,
        title: RichText.asText(title),
        excerpt: content.find((item) => item.type === 'paragraph')?.text ?? '',
        updatedAt: toDateString(new Date(last_publication_date)),
      }
    }
  )
}
