import { defineLocations } from "sanity/presentation";

export const locations = {
  blog: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: `${doc?.slug}`,
        },
        {
          title: "Blog",
          href: "/blog",
        },
      ],
    }),
  }),
  home: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: () => ({
      locations: [
        {
          title: "Home",
          href: "/",
        },
      ],
    }),
  }),
  page: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: `${doc?.slug}`,
        },
      ],
    }),
  }),
  project: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: `${doc?.slug}`,
        },
        {
          title: "Projects",
          href: "/projects",
        },
      ],
    }),
  }),
  profile: defineLocations({
    message: "Used by the intro hero and career blocks",
    locations: [{ title: "Home", href: "/" }],
  }),
  role: defineLocations({
    message: "Shown by the current roles and career blocks",
    locations: [{ title: "Home", href: "/" }],
  }),
  organization: defineLocations({
    message: "Shown with roles and projects",
    locations: [
      { title: "Home", href: "/" },
      { title: "Projects", href: "/projects" },
    ],
  }),
  tool: defineLocations({
    locations: [{ title: "Uses", href: "/uses" }],
  }),
  toolCategory: defineLocations({
    locations: [{ title: "Uses", href: "/uses" }],
  }),
};
