import PostPreview from "../Posts/PostPreview";

const Posts = ({ posts }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts.length > 0
        ? posts.map((post) => (
            <PostPreview
              alt={`Cover Image for ${post.title}`}
              date={post.date}
              key={post.slug}
              image={post.coverImage}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              author={post.author}
              content={post.content}
            />
          ))
        : null}
    </div>
  );
};

export default Posts;
