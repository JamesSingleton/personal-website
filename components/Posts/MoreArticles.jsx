import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import readingTime from "reading-time";
import Link from "next/link";
import PostPreview from "./PostPreview";

export default function MoreArticles({ posts }) {
  return (
    <div className="space-y-8 ">
      {posts.map((post) => (
        <div className="text-red-500 hover:text-red-600">
          <Link href="#">
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
