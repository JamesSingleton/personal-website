/**
 * One-off migration from the first-generation personal-site model to the
 * turbo-start-sanity model (page builder pages + personal blocks).
 *
 *   pnpm --filter studio exec sanity exec scripts/migrate-personal-site.ts --with-user-token
 *
 * Idempotent: pages are matched by slug, singletons are patched, and nothing is
 * deleted. Legacy `aboutPage`, `projectsPage`, `usesPage` and `experience`
 * documents are left in place to be removed by hand once verified.
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-11-14" });

let counter = 0;
const key = () =>
  `m${Date.now().toString(36)}${(counter++).toString(36).padStart(3, "0")}`;
const ref = (id: string) => ({ _type: "reference", _ref: id });
const internalUrl = (id: string) => ({
  _type: "customUrl",
  type: "internal",
  openInNewTab: false,
  internal: ref(id),
});
const externalUrl = (href: string) => ({
  _type: "customUrl",
  type: "external",
  openInNewTab: false,
  external: href,
});
const paragraph = (text: string) => ({
  _type: "block",
  _key: key(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});

type Legacy = {
  profile?: {
    email?: string;
    socialLinks?: Array<{ platform: string; url: string }>;
    portrait?: Record<string, unknown>;
    tagline?: string;
    summary?: string;
  } | null;
  settings?: {
    title?: string;
    description?: string;
    siteTitle?: string;
  } | null;
  home?: {
    photos?: Array<Record<string, unknown>>;
    featuredProjects?: Array<{ _ref: string }>;
    pageBuilder?: unknown[];
  } | null;
  about?: { headline?: string; body?: unknown[] } | null;
  projectsPage?: { headline?: string; intro?: string } | null;
  usesPage?: { headline?: string; intro?: string } | null;
  projects: Array<{
    _id: string;
    name?: string;
    title?: string;
    slug?: { current?: string };
    summary?: string;
    body?: unknown[];
    coverImage?: Record<string, unknown>;
    orderRank?: number;
  }>;
};

async function upsertPage(
  slug: string,
  doc: Record<string, unknown>
): Promise<string> {
  const existing = await client.fetch<string | null>(
    `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]._id`,
    { slug }
  );
  if (existing) {
    return existing;
  }
  const created = await client.create({
    _type: "page",
    slug: { _type: "slug", current: slug },
    ...doc,
  });
  return created._id;
}

async function main() {
  const legacy = await client.fetch<Legacy>(`{
    "profile": *[_id == "profile"][0],
    "settings": *[_id == "settings"][0],
    "home": *[_id == "homePage"][0],
    "about": *[_id == "aboutPage"][0],
    "projectsPage": *[_id == "projectsPage"][0],
    "usesPage": *[_id == "usesPage"][0],
    "projects": *[_type == "project" && !(_id in path("drafts.**"))]
  }`);

  // Projects: name → title, summary → description, body → richText,
  // slug "x" → "/projects/x".
  for (const project of legacy.projects) {
    const current = project.slug?.current ?? "";
    const patch = client.patch(project._id);
    if (project.name && !project.title) {
      patch.set({ title: project.name });
    }
    if (current && !current.startsWith("/projects/")) {
      patch.set({ slug: { _type: "slug", current: `/projects/${current}` } });
    }
    if (project.summary) {
      patch.setIfMissing({ description: project.summary }).unset(["summary"]);
    }
    if (project.body) {
      patch.setIfMissing({ richText: project.body }).unset(["body"]);
    }
    if (project.coverImage?._type && project.coverImage._type !== "image") {
      patch.set({ coverImage: { ...project.coverImage, _type: "image" } });
    }
    await patch.commit();
    // Unsetting `name` in the same patch as the edits above left it in place
    // on the first run, so the rename finishes in its own commit.
    if (project.name) {
      await client.patch(project._id).unset(["name"]).commit();
    }
  }

  const projects = await client.fetch<Array<{ _id: string }>>(
    `*[_type == "project" && !(_id in path("drafts.**"))] | order(orderRank asc){_id}`
  );

  // Pages
  const aboutId = await upsertPage("/about", {
    title: "About",
    description:
      legacy.profile?.summary ??
      "Software engineer at American Express, founder of Redshirt Sports, and high school swim coach.",
    pageBuilder: [
      {
        _type: "richTextBlock",
        _key: key(),
        eyebrow: "About",
        title: legacy.about?.headline ?? "About",
        richText: legacy.about?.body ?? [],
      },
      {
        _type: "careerList",
        _key: key(),
        eyebrow: "Career",
        title: "Work",
      },
    ],
  });

  const projectsId = await upsertPage("/projects", {
    title: "Projects",
    description:
      legacy.projectsPage?.intro ??
      "Side projects, community sites and the newsroom I run.",
    pageBuilder: [
      {
        _type: "richTextBlock",
        _key: key(),
        eyebrow: "Projects",
        title: legacy.projectsPage?.headline ?? "Projects",
        richText: legacy.projectsPage?.intro
          ? [paragraph(legacy.projectsPage.intro)]
          : [],
      },
      {
        _type: "projectGrid",
        _key: key(),
        eyebrow: "All work",
        title: "Everything",
        mode: "all",
      },
    ],
  });

  const usesId = await upsertPage("/uses", {
    title: "Uses",
    description:
      legacy.usesPage?.intro ??
      "Software I use, gadgets I love, and other things I recommend.",
    pageBuilder: [
      {
        _type: "richTextBlock",
        _key: key(),
        eyebrow: "Uses",
        title: legacy.usesPage?.headline ?? "Uses",
        richText: legacy.usesPage?.intro
          ? [paragraph(legacy.usesPage.intro)]
          : [],
      },
      { _type: "toolList", _key: key() },
    ],
  });

  const tx = client.transaction();

  // Profile: portrait becomes a plain image; contact details move to settings.
  if (legacy.profile) {
    tx.patch("profile", (p) => {
      const next = p.unset(["email", "socialLinks"]);
      const portrait = legacy.profile?.portrait;
      return portrait && portrait._type !== "image"
        ? next.set({ portrait: { ...portrait, _type: "image" } })
        : next;
    });
  }

  const socials = Object.fromEntries(
    (legacy.profile?.socialLinks ?? []).map(({ platform, url }) => [
      platform === "x" ? "twitter" : platform,
      url,
    ])
  );
  tx.createIfNotExists({ _id: "settings", _type: "settings" });
  tx.patch("settings", (p) =>
    p
      .setIfMissing({
        label: "Settings",
        siteTitle: legacy.settings?.title ?? "James Singleton",
        siteDescription:
          legacy.settings?.description ??
          "Software engineer, founder, and swim coach based in Arizona.",
        ...(legacy.profile?.email
          ? { contactEmail: legacy.profile.email }
          : {}),
        socialLinks: socials,
      })
      .unset(["title", "description", "navigation"])
  );

  // Home: a page builder made of the personal blocks.
  const featured = (
    legacy.home?.featuredProjects?.map((r) => r._ref) ??
    projects.slice(0, 3).map((p) => p._id)
  ).slice(0, 3);
  tx.createIfNotExists({ _id: "homePage", _type: "homePage" });
  if (!legacy.home?.pageBuilder) {
    tx.patch("homePage", (p) =>
      p
        .set({
          title: "Home",
          slug: { _type: "slug", current: "/" },
          description:
            legacy.settings?.description ??
            "Software engineer, founder, and swim coach based in Arizona.",
          pageBuilder: [
            {
              _type: "introHero",
              _key: key(),
              buttons: [
                {
                  _type: "button",
                  _key: key(),
                  text: "About me",
                  variant: "default",
                  url: internalUrl(aboutId),
                },
                {
                  _type: "button",
                  _key: key(),
                  text: "Selected work",
                  variant: "outline",
                  url: externalUrl("#work"),
                },
              ],
            },
            { _type: "currentRoles", _key: key(), eyebrow: "01 Now" },
            {
              _type: "projectGrid",
              _key: key(),
              eyebrow: "02 Selected work",
              title: "Things I've built",
              mode: "selected",
              showAllLink: true,
              projects: featured.map((id) => ({ ...ref(id), _key: key() })),
            },
            {
              _type: "photoGrid",
              _key: key(),
              eyebrow: "03 Behind the lens",
              photos: (legacy.home?.photos ?? []).map((photo) => ({
                ...photo,
                _type: "photo",
                _key: (photo._key as string) ?? key(),
              })),
            },
            {
              _type: "careerList",
              _key: key(),
              eyebrow: "04 Career",
              title: "Work",
              intro:
                "Nearly a decade of building for the web, from enterprise frameworks to a newsroom of my own.",
            },
          ],
        })
        .unset(["headline", "intro", "photos", "featuredProjects", "seo"])
    );
  }

  const navLink = (name: string, id: string) => ({
    _type: "navbarLink",
    _key: key(),
    name,
    url: internalUrl(id),
  });
  tx.createIfNotExists({
    _id: "navbar",
    _type: "navbar",
    label: "Navbar",
    columns: [
      navLink("About", aboutId),
      navLink("Projects", projectsId),
      navLink("Uses", usesId),
    ],
  });

  const footerLink = (name: string, id: string) => ({
    _type: "footerColumnLink",
    _key: key(),
    name,
    url: internalUrl(id),
  });
  tx.createIfNotExists({
    _id: "footer",
    _type: "footer",
    label: "Footer",
    subtitle: legacy.profile?.tagline,
    columns: [
      {
        _type: "footerColumn",
        _key: key(),
        title: "Site",
        links: [
          footerLink("About", aboutId),
          footerLink("Projects", projectsId),
          footerLink("Uses", usesId),
        ],
      },
    ],
    copyright: "James Singleton",
  });

  tx.createIfNotExists({
    _id: "blogIndex",
    _type: "blogIndex",
    title: "Writing",
    slug: { _type: "slug", current: "/blog" },
  });

  await tx.commit();
  console.log("Migrated to the turbo-start-sanity model.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
