import {
  buttonsToMarkdown,
  headingToMarkdown,
  joinSections,
  type MarkdownBlock,
  type MarkdownOptions,
} from "../internal/markdown";
import { escapeMarkdown } from "../internal/portable-text-to-markdown";
import type { IntroHeroProps } from "./index";

export function introHeroToMarkdown(
  block: MarkdownBlock,
  options: MarkdownOptions
): string {
  const { headline, intro, profile } = block as MarkdownBlock & IntroHeroProps;
  const body = (intro || profile?.summary || "").trim();
  return joinSections([
    headingToMarkdown(headline || profile?.tagline || profile?.name, 2),
    body ? escapeMarkdown(body) : "",
    buttonsToMarkdown(block.buttons, options),
  ]);
}
