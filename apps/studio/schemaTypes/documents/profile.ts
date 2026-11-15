import { UserRound } from "lucide-react";
import { defineField, defineType } from "sanity";

import { imageWithAltField } from "@/schemaTypes/common";

export const profile = defineType({
  name: "profile",
  type: "document",
  title: "Profile",
  description:
    "Who you are. Blocks like the intro hero and career list read from here, so it only needs updating once.",
  icon: UserRound,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: "Tagline",
      description:
        'One line, e.g. "Software engineer, founder, and swim coach." Text after the first comma moves to a second line in the intro hero.',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      rows: 4,
      description: "A short bio of two or three sentences.",
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    imageWithAltField({ name: "portrait", title: "Portrait" }),
    defineField({
      name: "resume",
      type: "file",
      title: "Resume",
      description:
        'PDF linked from the "Download Resume" button. The button stays disabled until a file is uploaded and published.',
      options: { accept: "application/pdf" },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "tagline", media: "portrait" },
  },
});
