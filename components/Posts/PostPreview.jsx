import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import readingTime from "reading-time";

const PostPreview = ({
  alt,
  date,
  image,
  title,
  slug,
  excerpt,
  author: { name, picture, socialUrl },
  content,
}) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <Image
        className="h-48 w-full object-cover"
        src={`https:${image.url}`}
        alt={alt}
        width="408"
        height="192"
      />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </a>
        </Link>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href={socialUrl} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">{name}</span>
            <img
              className="h-10 w-10 rounded-full"
              src={`https:${picture.url}`}
              alt=""
            />
          </a>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {name}
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime={date}>{format(new Date(date), "LLLL	d, yyyy")}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{readingTime(documentToPlainTextString(content)).text}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostPreview;
