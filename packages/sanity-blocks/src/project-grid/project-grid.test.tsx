import { ProjectGrid } from "@workspace/sanity-blocks/project-grid/index";
import { renderToStaticMarkup } from "react-dom/server";

const projects = [
  {
    _id: "p1",
    title: "Redshirt Sports",
    slug: "/projects/redshirt-sports",
    description: "College football news.",
    category: "Sports media",
    coverImage: { id: "image-abc123-1440x810-png", alt: "Homepage" },
  },
  {
    _id: "p2",
    title: "HLB Electric",
    slug: "/projects/hlb-electric",
    tags: ["Local business"],
  },
];

test("ProjectGrid's showcase layout links each project internally", () => {
  const html = renderToStaticMarkup(
    <ProjectGrid items={projects} layout="showcase" title="Projects" />
  );

  expect(html).toContain('href="/projects/redshirt-sports"');
  expect(html).toContain('href="/projects/hlb-electric"');
  expect(html).not.toContain('target="_blank"');
  // The first project is the featured banner, which shows its screenshot
  // rather than a category; the rest are cards with a category caption.
  expect(html).toContain("Redshirt Sports website screenshot");
  expect(html).toContain("Local business");
});

test("ProjectGrid's grid layout shows the description under the title", () => {
  const html = renderToStaticMarkup(
    <ProjectGrid
      description="Things I've shipped."
      items={projects}
      title="Projects"
    />
  );

  expect(html).toContain("Things I&#x27;ve shipped.");
  expect(html).toContain("Redshirt Sports");
});
