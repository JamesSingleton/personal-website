import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
      {documentToReactComponents(content)}
    </div>
  );
}
