import { Wrench } from "lucide-react";
import { defineField, defineType } from "sanity";

export const tool = defineType({
  name: "tool",
  type: "document",
  title: "Tool",
  description: "Software, hardware or gear you use and recommend.",
  icon: Wrench,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "toolCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "url", type: "url", title: "Link" }),
  ],
  preview: { select: { title: "name", subtitle: "category.title" } },
});
