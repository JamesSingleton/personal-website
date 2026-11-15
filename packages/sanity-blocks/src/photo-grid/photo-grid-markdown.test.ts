import { photoGridToMarkdown } from "./markdown";

test("photoGridToMarkdown falls back to alt text without a URL resolver", () => {
  const result = photoGridToMarkdown(
    {
      eyebrow: "Behind the lens",
      photos: [{ _key: "a", id: "image-abc-10x10-jpg", alt: "A saguaro" }],
    } as never,
    {}
  );
  expect(result).toBe("**Behind the lens**\n\nA saguaro");
});
