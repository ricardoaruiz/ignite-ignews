import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { toDateString } from 'utils/date'
import { getPrismicClient } from './prismic'
import { Post } from './types'

/**
 * Get all active posts
 * @param req
 * @returns
 */
export const getPosts = async (req?: unknown): Promise<Post[]> => {
  const prismic = getPrismicClient(req)

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
        content: content.find((item) => item.type === 'paragraph')?.text ?? '',
        updatedAt: toDateString(new Date(last_publication_date)),
      }
    }
  )
}

/**
 * Get a post by slug
 * @param id
 * @param req
 * @returns
 */
export const getPost = async (id: string, req?: unknown): Promise<Post> => {
  const prismic = getPrismicClient(req)

  const post = await prismic.getByUID('post', id, {})

  const {
    uid,
    last_publication_date,
    data: { title, content },
  } = post

  return {
    slug: uid,
    title: RichText.asText(title),
    content: RichText.asHtml(content),
    updatedAt: toDateString(new Date(last_publication_date)),
  }
}
