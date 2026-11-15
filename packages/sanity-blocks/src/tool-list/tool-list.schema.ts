import { Wrench } from "lucide-react";
import { defineField, defineType } from "sanity";

export const toolListSchema = defineType({
  name: "toolList",
  type: "object",
  title: "Tool list",
  icon: Wrench,
  description: "Every Tool, grouped by category.",
  fields: [defineField({ name: "eyebrow", type: "string", title: "Eyebrow" })],
  preview: {
    prepare: () => ({ title: "Tools by category", subtitle: "Tool list" }),
  },
});
