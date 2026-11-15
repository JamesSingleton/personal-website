import { LayoutGrid } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectGridSchema = defineType({
  name: "projectGrid",
  type: "object",
  title: "Project grid",
  icon: LayoutGrid,
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      description:
        "Small label above the title. Not shown in the Showcase layout.",
      initialValue: "02 Selected work",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "The heading above the projects.",
      initialValue: "Things I've built",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 2,
      description:
        "Optional intro under the title. Shown centered in the Showcase layout.",
    }),
    defineField({
      name: "layout",
      type: "string",
      title: "Layout",
      description:
        "Grid: compact cards with logos. Showcase: large screenshots, using each project's cover image, with the first project featured.",
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "Showcase", value: "showcase" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "grid",
    }),
    defineField({
      name: "mode",
      type: "string",
      title: "Show",
      description:
        "Pick specific projects, or list every project in sort order.",
      options: {
        list: [
          { title: "Chosen projects", value: "selected" },
          { title: "All projects", value: "all" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "selected",
    }),
    defineField({
      name: "projects",
      type: "array",
      title: "Projects",
      description: "The projects to show, in this order.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "project" }] })],
      hidden: ({ parent }) => parent?.mode === "all",
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "showAllLink",
      type: "boolean",
      title: 'Show "All projects" link',
      description: "Adds a link to /projects next to the title.",
      initialValue: true,
      hidden: ({ parent }) => parent?.mode === "all",
    }),
  ],
  preview: {
    select: { title: "title", mode: "mode" },
    prepare: ({ title, mode }) => ({
      title: title || "Projects",
      subtitle: `Project grid · ${mode === "all" ? "all" : "chosen"}`,
    }),
  },
});
