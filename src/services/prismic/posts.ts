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
export const getPosts = async (
  req?: unknown,
  pageSize?: number
): Promise<Post[]> => {
  const prismic = getPrismicClient(req)

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: pageSize || 100,
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

type GetPostParams = {
  id: string
  req?: unknown
  isPreview?: boolean
}
/**
 * Get a post by slug
 * @param id
 * @param req
 * @returns
 */
export const getPost = async ({
  id,
  isPreview = false,
  req,
}: GetPostParams): Promise<Post> => {
  const prismic = getPrismicClient(req)
  const post = await prismic.getByUID('post', id, {})

  return {
    slug: post.uid,
    title: RichText.asText(post.data.title),
    content: !isPreview
      ? RichText.asHtml(post.data.content)
      : RichText.asHtml(post.data.content.splice(0, 3)),
    updatedAt: toDateString(new Date(post.last_publication_date)),
  }
}
