import { Tag } from "lucide-react";
import { defineField, defineType } from "sanity";

export const toolCategory = defineType({
  name: "toolCategory",
  type: "document",
  title: "Tool category",
  icon: Tag,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "orderRank",
      type: "number",
      title: "Sort order",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "orderRankAsc",
      by: [{ field: "orderRank", direction: "asc" }],
    },
  ],
});
