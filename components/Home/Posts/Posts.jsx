import { useEffect, useState } from 'react'
import Post from './Post'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const Posts = ({ posts }) => {
  return (
    <div className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {posts.length > 0
          ? posts.map(post => (
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

export default Posts;