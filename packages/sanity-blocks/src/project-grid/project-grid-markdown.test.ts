import { projectGridToMarkdown } from "./markdown";

test("projectGridToMarkdown links each project with its summary", () => {
  const result = projectGridToMarkdown(
    {
      title: "Things I've built",
      items: [
        {
          _id: "p",
          title: "Redshirt Sports",
          slug: "/projects/redshirt-sports",
          description: "College football news.",
        },
      ],
    } as never,
    { baseUrl: "https://example.com" }
  );
  expect(result).toContain("## Things I've built");
  expect(result).toContain(
    "- [Redshirt Sports](https://example.com/projects/redshirt-sports): College football news."
  );
  expect(result).not.toMatch(/<[A-Z]/);
});
