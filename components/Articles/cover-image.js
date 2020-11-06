import cn from 'classnames'
import Image from 'next/image'


export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image 
      src={`https:${url}`}
      alt={`Cover Image for ${title}`}
      width="1240"
      height="620"
      className={cn('h-full', {
        'rounded-t': slug,
      })}
    />
  )
  return image
}