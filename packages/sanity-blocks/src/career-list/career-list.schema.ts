import { BriefcaseBusiness } from "lucide-react";
import { defineField, defineType } from "sanity";

export const careerListSchema = defineType({
  name: "careerList",
  type: "object",
  title: "Career list",
  icon: BriefcaseBusiness,
  description:
    'Every Role, newest first, with a "Download Resume" button for the PDF on your Profile.',
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      initialValue: "04 Career",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Work",
    }),
    defineField({ name: "intro", type: "text", title: "Intro", rows: 3 }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({
      title: title || "Work",
      subtitle: "Career list",
    }),
  },
});
