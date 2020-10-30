import { useEffect, useState } from 'react'
import Post from './Post'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const Posts = () => {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <div className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {posts.length > 0
          ? posts.map(p => (
              <Post
                alt={p.fields.alt}
                date={p.fields.date}
                key={p.fields.title}
                image={p.fields.image}
                title={p.fields.title}
                url={p.fields.url}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Posts;