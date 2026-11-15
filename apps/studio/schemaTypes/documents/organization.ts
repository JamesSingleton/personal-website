import { Building2 } from "lucide-react";
import { defineField, defineType } from "sanity";

export const organization = defineType({
  name: "organization",
  type: "document",
  title: "Organization",
  description: "A company, school or team you have worked with.",
  icon: Building2,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      description: "A square mark reads best at small sizes.",
    }),
    defineField({ name: "url", type: "url", title: "Website" }),
  ],
  preview: { select: { title: "name", subtitle: "url", media: "logo" } },
});
