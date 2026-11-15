import {
  eyebrowToMarkdown,
  joinSections,
  type MarkdownBlock,
  type MarkdownOptions,
} from "../internal/markdown";
import { yearOf } from "../internal/personal";
import { escapeMarkdown } from "../internal/portable-text-to-markdown";
import type { CurrentRolesProps } from "./index";

export function currentRolesToMarkdown(
  block: MarkdownBlock,
  _options?: MarkdownOptions
): string {
  const { roles } = block as MarkdownBlock & CurrentRolesProps;
  const list = (roles ?? [])
    .map((role) =>
      escapeMarkdown(
        `- ${role.title} at ${role.organization?.name ?? "—"} (since ${yearOf(role.startDate)})`
      )
    )
    .join("\n");
  return joinSections([eyebrowToMarkdown(block.eyebrow), list]);
}
