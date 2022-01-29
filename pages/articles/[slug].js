import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '@components/Articles/container'
import SectionSeparator from '@components/Articles/section-separator'
import MoreArticles from '@components/Articles/more-articles'
import PostHeader from '@components/Articles/post-header'
import PostBody from '@components/Articles/post-body'
import PostTitle from '@components/Articles/post-title'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api'
import { NAME } from '@lib/constants'
import { Layout } from '@components/common'

const Article = ({ post, morePosts, preview }) => {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <meta property="og:image" content={post.coverImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts && morePosts.length > 0 && (
            <MoreArticles posts={morePosts} />
          )}
        </>
      )}
    </Container>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts?.map(({ slug }) => `/articles/${slug}` ?? []),
    fallback: true,
  }
}

Article.Layout = Layout

export default Article
