import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ErrorPage from "next/error";
import SocialMeta from "@/components/SocialMeta";
import Container from "@/components/Posts/container";
import SectionSeparator from "@/components/Posts/section-separator";
import MoreArticles from "@/components/Posts/MoreArticles";
import PostHeader from "@/components/Posts/PostHeader";
import PostBody from "@/components/Posts/post-body";
import Page from "@/components/Layout/Page";
import PostTitle from "@/components/Posts/PostTitle";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import { NAME } from "@/lib/constants";

const Article = ({ post, morePosts, preview, slug }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Page>
          <PostTitle>Loading...</PostTitle>
        </Page>
      ) : (
        <Page title={`${post.title} | ${NAME}`} description={post.excerpt}>
          <SocialMeta
            url={`https://jamessingleton.me/posts/${slug}`}
            description={post.excerpt}
            image={post.coverImage.url}
            type="article"
          />
          <section className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <article className="xl:divide-y xl:divide-gray-200">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <div
                className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
                style={{ gridTemplateRows: "auto 1fr" }}
              >
                <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                  <dt className="sr-only">Authors</dt>
                  <dd>
                    <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                      <li
                        key={post.author.twitterHandle}
                        className="flex items-center space-x-2"
                      >
                        <img
                          src={post.author.picture.url}
                          alt={`Avatar of ${post.author.name}`}
                          className="w-10 h-10 rounded-full"
                        />
                        <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                          <dt className="sr-only">Name</dt>
                          <dd className="text-gray-900">{post.author.name}</dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            <a
                              href={`https://twitter.com/${post.author.twitterHandle}`}
                              className="text-rose-500 hover:text-rose-600"
                            >
                              @{post.author.twitterHandle}
                            </a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                  <div className="prose max-w-none pt-10 pb-8">
                    <PostBody content={post.content} />
                  </div>
                </div>
                <div className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
                  {morePosts && morePosts.length > 0 && (
                    <div className="py-8">
                      <h2 className="text-xs tracking-wide uppercase text-gray-500">
                        More Stories
                      </h2>
                      <MoreArticles posts={morePosts} />
                    </div>
                  )}
                  <div className="pt-8">
                    <Link href="/posts">
                      <a className="text-gray-900 hover:text-rose-600">
                        &larr; Back to the blog
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </Page>
      )}
    </>
  );
};

export async function getStaticProps({ params: { slug }, preview = false }) {
  const data = await getPostAndMorePosts(slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}` ?? []),
    fallback: true,
  };
}

export default Article;
