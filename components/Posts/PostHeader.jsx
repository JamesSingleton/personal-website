import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./PostTitle";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="pt-6 xl:pb-10">
      <div className="space-y-1 text-center">
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published On</dt>
            <dd className="text-base leading-6 font-medium text-gray-500">
              <DateComponent dateString={date} />
            </dd>
          </div>
        </dl>
        <div>
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </div>
  );
}
