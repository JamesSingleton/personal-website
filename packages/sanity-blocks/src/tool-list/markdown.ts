import {
  eyebrowToMarkdown,
  headingToMarkdown,
  joinSections,
  type MarkdownBlock,
  type MarkdownOptions,
  mdLink,
} from "../internal/markdown";
import { escapeMarkdown } from "../internal/portable-text-to-markdown";
import type { ToolListProps } from "./index";

export function toolListToMarkdown(
  block: MarkdownBlock,
  options: MarkdownOptions
): string {
  const { categories } = block as unknown as ToolListProps;
  return joinSections([
    eyebrowToMarkdown(block.eyebrow),
    ...(categories ?? []).map((category) =>
      joinSections([
        headingToMarkdown(category.title, 3),
        (category.tools ?? [])
          .map((tool) => {
            const name = mdLink(tool.name ?? "", tool.url, options);
            return tool.description
              ? `- ${name}: ${escapeMarkdown(tool.description)}`
              : `- ${name}`;
          })
          .join("\n"),
      ])
    ),
  ]);
}
