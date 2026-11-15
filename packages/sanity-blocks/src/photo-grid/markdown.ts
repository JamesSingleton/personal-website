import {
  eyebrowToMarkdown,
  imageToMarkdown,
  joinSections,
  type MarkdownBlock,
  type MarkdownOptions,
} from "../internal/markdown";
import type { PhotoGridProps } from "./index";

export function photoGridToMarkdown(
  block: MarkdownBlock,
  options: MarkdownOptions
): string {
  const { photos } = block as MarkdownBlock & PhotoGridProps;
  return joinSections([
    eyebrowToMarkdown(block.eyebrow),
    ...(photos ?? []).map((photo) => imageToMarkdown(photo, options)),
  ]);
}
