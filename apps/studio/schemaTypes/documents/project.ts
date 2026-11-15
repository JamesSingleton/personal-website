import { Rocket } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

import { documentSlugField, imageWithAltField } from "@/schemaTypes/common";
import { GROUP, GROUPS } from "@/utils/constant";
import { ogFields } from "@/utils/og-fields";
import { seoFields } from "@/utils/seo-fields";

export const project = defineType({
  name: "project",
  type: "document",
  title: "Project",
  icon: Rocket,
  groups: GROUPS,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Name",
      group: GROUP.MAIN_CONTENT,
      validation: (rule) => rule.required(),
    }),
    documentSlugField("project", { group: GROUP.MAIN_CONTENT }),
    defineField({
      name: "description",
      type: "text",
      title: "Summary",
      rows: 3,
      group: GROUP.MAIN_CONTENT,
      description: "Shown on project cards and used as the search description.",
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      group: GROUP.MAIN_CONTENT,
      description:
        'A short label shown on showcase cards, e.g. "Sports media" or "Community". Falls back to the first tag.',
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "url",
      type: "url",
      title: "Website",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      group: GROUP.MAIN_CONTENT,
      description: "Falls back to the organization's logo.",
    }),
    defineField({
      name: "organization",
      type: "reference",
      title: "Organization",
      to: [{ type: "organization" }],
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "duration",
      type: "duration",
      title: "Duration",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      group: GROUP.MAIN_CONTENT,
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "active",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      group: GROUP.MAIN_CONTENT,
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      validation: (rule) => rule.unique(),
    }),
    imageWithAltField({
      name: "coverImage",
      title: "Cover image",
      group: GROUP.MAIN_CONTENT,
      description:
        "A 16:9 screenshot of the site. Used by the Showcase layout and the project page.",
    }),
    defineField({
      name: "richText",
      type: "richText",
      title: "Write-up",
      group: GROUP.MAIN_CONTENT,
      description: "The full story: what it is, why you built it, how.",
    }),
    defineField({
      name: "orderRank",
      type: "number",
      title: "Sort order",
      group: GROUP.MAIN_CONTENT,
      description: "Lower numbers are listed first.",
      initialValue: 100,
    }),
    ...seoFields,
    ...ogFields,
  ],
  orderings: [
    {
      title: "Sort order",
      name: "orderRankAsc",
      by: [{ field: "orderRank", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      media: "logo",
      orgLogo: "organization.logo",
    },
    prepare: ({ title, slug, media, orgLogo }) => ({
      title,
      subtitle: slug,
      media: media ?? orgLogo,
    }),
  },
});
