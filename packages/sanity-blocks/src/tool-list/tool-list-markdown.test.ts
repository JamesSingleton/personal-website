import { toolListToMarkdown } from "./markdown";

test("toolListToMarkdown groups tools under category headings", () => {
  const result = toolListToMarkdown(
    {
      categories: [
        {
          _id: "c",
          title: "Development",
          tools: [{ _id: "t", name: "VS Code", description: "My editor." }],
        },
      ],
    } as never,
    {}
  );
  expect(result).toBe("### Development\n\n- VS Code: My editor.");
});
