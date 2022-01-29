import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link classname="h-full" as={`/articles/${slug}`} href="/articles/[slug]">
      <div className="mb-3 h-full transform cursor-pointer duration-500 ease-in-out hover:scale-105">
        <div className="h-full rounded-lg rounded bg-gray-900 text-gray-100 shadow-lg">
          <div className="block">
            <figure className="relative w-full">
              <CoverImage title={title} slug={slug} url={coverImage.url} />
            </figure>
          </div>
          <div className="p-5 pb-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="mb-4">
              <DateComponent dateString={date} />
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </div>
    </Link>
  )
}
