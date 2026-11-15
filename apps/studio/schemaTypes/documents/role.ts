import { BriefcaseBusiness } from "lucide-react";
import { defineField, defineType } from "sanity";

export const roleKinds = [
  { title: "Engineering", value: "employment" },
  { title: "Founder", value: "founder" },
  { title: "Coaching", value: "coaching" },
  { title: "Volunteer", value: "volunteer" },
];

export const role = defineType({
  name: "role",
  type: "document",
  title: "Role",
  description: "A position you have held at an organization.",
  icon: BriefcaseBusiness,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "organization",
      type: "reference",
      title: "Organization",
      to: [{ type: "organization" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      type: "string",
      title: "Kind",
      options: { list: roleKinds, layout: "radio", direction: "horizontal" },
      initialValue: "employment",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      type: "duration",
      title: "Duration",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      rows: 3,
      validation: (rule) => rule.max(280),
    }),
  ],
  orderings: [
    {
      title: "Most recent",
      name: "startDesc",
      by: [{ field: "duration.start", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      organization: "organization.name",
      media: "organization.logo",
      start: "duration.start",
      end: "duration.end",
    },
    prepare: ({ title, organization, media, start, end }) => ({
      title,
      subtitle: `${organization ?? "—"} · ${start?.slice(0, 4) ?? "?"}–${end?.slice(0, 4) ?? "now"}`,
      media,
    }),
  },
});
