import Link from 'next/link'
import Image from 'next/image'

const Post = ({ alt, date, image, title, slug }) => (
  <Link className="h-full" as={`/articles/${slug}`} href="/articles/[slug]">
    <div className="mb-3 h-full transform cursor-pointer duration-500 ease-in-out hover:scale-105">
      <div className="h-full rounded-lg rounded bg-gray-900 text-gray-100 shadow-lg">
        <div className="block">
          <figure className="tint relative mb-5 h-48 w-full">
            <Image
              className="h-full rounded-t"
              src={`https:${image.url}`}
              alt={alt}
              width="408"
              height="192"
            />
          </figure>
        </div>
        <div className="p-5 pb-16">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>Test Post</p>
        </div>
      </div>
    </div>
  </Link>
)

export default Post
