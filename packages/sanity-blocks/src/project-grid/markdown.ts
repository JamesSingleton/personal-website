import {
  eyebrowToMarkdown,
  headingToMarkdown,
  joinSections,
  type MarkdownBlock,
  type MarkdownOptions,
  mdLink,
} from "../internal/markdown";
import { escapeMarkdown } from "../internal/portable-text-to-markdown";
import type { ProjectGridProps } from "./index";

export function projectGridToMarkdown(
  block: MarkdownBlock,
  options: MarkdownOptions
): string {
  const { items, description } = block as unknown as ProjectGridProps;
  const list = (items ?? [])
    .filter((project) => project?.slug)
    .map((project) => {
      const link = mdLink(project.title ?? "Untitled", project.slug, options);
      return project.description
        ? `- ${link}: ${escapeMarkdown(project.description)}`
        : `- ${link}`;
    })
    .join("\n");
  return joinSections([
    eyebrowToMarkdown(block.eyebrow),
    headingToMarkdown(block.title, 2),
    description ? escapeMarkdown(description) : "",
    list,
  ]);
}
