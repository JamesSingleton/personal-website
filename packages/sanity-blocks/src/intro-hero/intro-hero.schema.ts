import { buttonsField } from "@workspace/sanity-blocks/internal/schema-fields";
import { UserRound } from "lucide-react";
import { defineField, defineType } from "sanity";

export const introHeroSchema = defineType({
  name: "introHero",
  type: "object",
  title: "Intro hero",
  icon: UserRound,
  description:
    "A large introduction that reads your name, tagline and summary from Profile.",
  fields: [
    defineField({
      name: "headline",
      type: "string",
      title: "Headline",
      description:
        "Defaults to your Profile tagline. Text after the first comma moves to a right-aligned second line.",
    }),
    defineField({
      name: "intro",
      type: "text",
      title: "Intro",
      rows: 3,
      description: "Defaults to your Profile summary.",
    }),
    buttonsField,
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({
      title: title || "Profile tagline",
      subtitle: "Intro hero",
    }),
  },
});
