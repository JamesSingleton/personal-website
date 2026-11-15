import { BlockEyebrow } from "@workspace/sanity-blocks/internal/block-eyebrow";
import type { PersonalProject } from "@workspace/sanity-blocks/internal/personal";
import { SanityImage } from "@workspace/sanity-blocks/internal/sanity-image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ShowcaseGrid } from "../showcase-grid/index";

export interface ProjectGridProps {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  layout?: string | null;
  mode?: string | null;
  showAllLink?: boolean | null;
  items?: PersonalProject[] | null;
}

export function ProjectGrid({
  eyebrow,
  title,
  description,
  layout,
  mode,
  showAllLink,
  items,
}: Readonly<ProjectGridProps>) {
  const projects = (items ?? []).filter((project) => project?.slug);

  if (layout === "showcase") {
    return (
      <ShowcaseGrid
        description={description}
        items={projects.map((project, index) => ({
          _key: project._id,
          siteName: project.title,
          url: project.slug,
          category: project.category ?? project.tags?.[0],
          screenshot: project.coverImage,
          attributionLogo: project.logo,
          featured: index === 0,
          openInNewTab: false,
        }))}
        title={title}
      />
    );
  }

  return (
    <section className="border-border border-b" id="work">
      <div className="container flex flex-col gap-6 pt-5 pb-10">
        <BlockEyebrow eyebrow={eyebrow} />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2
              className="font-semibold text-4xl uppercase tracking-[-0.03em] sm:text-5xl"
              data-inline-edit
            >
              {title}
            </h2>
            {description ? (
              <p className="text-muted-foreground">{description}</p>
            ) : null}
          </div>
          {mode !== "all" && showAllLink !== false ? (
            <Link
              className="inline-flex items-center gap-1 font-mono text-muted-foreground text-xs uppercase tracking-[0.08em] hover:text-foreground"
              href="/projects"
            >
              All projects
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
      <ul className="container grid border-border border-t md:grid-cols-3">
        {projects.map((project, index) => (
          <li
            className="group hover-surface relative flex flex-col gap-6 border-border border-b py-8 md:border-r md:px-6 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n+1)]:pl-0"
            key={project._id}
          >
            <div className="flex items-start justify-between">
              <div className="grid size-16 place-items-center border border-border bg-grid-dots text-border">
                {project.logo ? (
                  <SanityImage
                    className="size-9 object-contain"
                    height={80}
                    image={project.logo}
                    width={80}
                  />
                ) : null}
              </div>
              <span className="font-mono text-muted-foreground text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl tracking-tight">
                <Link
                  className="after:absolute after:inset-0"
                  href={project.slug ?? "#"}
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
            </div>
            <p className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.08em]">
              View project
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
