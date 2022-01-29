import PostPreview from './post-preview'

export default function MoreArticles({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-gray-100 md:text-7xl">
        More Stories
      </h2>
      <div className="md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32 grid grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
