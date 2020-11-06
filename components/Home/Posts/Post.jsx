import Link from 'next/link';
import Image from 'next/image'

const Post = ({ alt, date, image, title, slug }) => (
  <Link className="h-full" as={`/articles/${slug}`} href="/articles/[slug]">
    <div className="cursor-pointer h-full mb-3 duration-500 ease-in-out transform hover:scale-105">
      <div className="bg-gray-900 h-full text-gray-100 shadow-lg rounded-lg rounded">
        <div className="block">
          <figure className="relative tint mb-5 h-48 w-full">
            <Image
              className="rounded-t h-full"
              src={`https:${image.url}`}
              alt={alt}
              width="408"
              height="192"
            />
          </figure>
        </div>
        <div className="p-5 pb-16">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>
            Test Post
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default Post;