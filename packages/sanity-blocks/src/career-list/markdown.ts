import {
  eyebrowToMarkdown,
  headingToMarkdown,
  joinSections,
  type MarkdownBlock,
  type MarkdownOptions,
  mdLink,
} from "../internal/markdown";
import { roleDates } from "../internal/personal";
import { escapeMarkdown } from "../internal/portable-text-to-markdown";
import type { CareerListProps } from "./index";

export function careerListToMarkdown(
  block: MarkdownBlock,
  options: MarkdownOptions
): string {
  const { intro, roles, resumeUrl } = block as MarkdownBlock & CareerListProps;
  const list = (roles ?? [])
    .map((role) => {
      const { start, end } = roleDates(role);
      return escapeMarkdown(
        `- ${role.title}, ${role.organization?.name ?? "—"} (${start} – ${end})`
      );
    })
    .join("\n");
  return joinSections([
    eyebrowToMarkdown(block.eyebrow),
    headingToMarkdown(block.title, 2),
    intro ? escapeMarkdown(intro) : "",
    list,
    resumeUrl ? mdLink("Download resume", resumeUrl, options) : "",
  ]);
}
