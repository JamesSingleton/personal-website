import { splitHeadline } from "./index";
import { introHeroToMarkdown } from "./markdown";

test("introHeroToMarkdown falls back to the profile tagline and summary", () => {
  const result = introHeroToMarkdown(
    {
      profile: { tagline: "Engineer, coach.", summary: "Hi, I'm James." },
    } as never,
    {}
  );
  expect(result).toBe("## Engineer, coach.\n\nHi, I'm James.");
  expect(result).not.toMatch(/</);
});

test("introHeroToMarkdown prefers block overrides", () => {
  const result = introHeroToMarkdown(
    {
      headline: "Override",
      intro: "Custom intro",
      profile: { tagline: "Ignored", summary: "Ignored" },
    } as never,
    {}
  );
  expect(result).toBe("## Override\n\nCustom intro");
});

test("splitHeadline breaks after the first comma", () => {
  expect(splitHeadline("Software engineer, founder, and swim coach.")).toEqual([
    "Software engineer,",
    "founder, and swim coach.",
  ]);
  expect(splitHeadline("No comma")).toEqual(["No comma", null]);
});
