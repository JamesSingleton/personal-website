import { useEffect, useState } from 'react'
import Post from './Post'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Posts = ({ posts }) => {
  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:px-8 md:py-16">
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.length > 0
          ? posts.map((post) => (
              <Post
                alt={`Cover Image for ${post.title}`}
                date={post.date}
                key={post.slug}
                image={post.coverImage}
                title={post.title}
                slug={post.slug}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Posts
