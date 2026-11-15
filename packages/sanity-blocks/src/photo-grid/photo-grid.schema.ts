import { imageWithAltField } from "@workspace/sanity-blocks/internal/schema-fields";
import { Images } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

const photo = imageWithAltField({ name: "photo", title: "Photo" });

export const photoGridSchema = defineType({
  name: "photoGrid",
  type: "object",
  title: "Photo grid",
  icon: Images,
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      initialValue: "03 Behind the lens",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Read by screen readers; not shown visually.",
      initialValue: "Photography",
    }),
    defineField({
      name: "photos",
      type: "array",
      title: "Photos",
      of: [defineArrayMember({ ...photo, type: "image" })],
      validation: (rule) => rule.max(10),
    }),
  ],
  preview: {
    select: { title: "eyebrow", media: "photos.0" },
    prepare: ({ title, media }) => ({
      title: title || "Photos",
      subtitle: "Photo grid",
      media,
    }),
  },
});
