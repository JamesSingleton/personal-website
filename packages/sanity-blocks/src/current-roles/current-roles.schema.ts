import { CircleDot } from "lucide-react";
import { defineField, defineType } from "sanity";

export const currentRolesSchema = defineType({
  name: "currentRoles",
  type: "object",
  title: "Current roles",
  icon: CircleDot,
  description: "Lists every Role without an end date.",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      initialValue: "01 Now",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Read by screen readers; not shown visually.",
      initialValue: "What I'm doing now",
    }),
  ],
  preview: {
    select: { title: "eyebrow" },
    prepare: ({ title }) => ({
      title: title || "Now",
      subtitle: "Current roles",
    }),
  },
});
