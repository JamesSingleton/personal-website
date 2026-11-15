import { Logger } from "@workspace/logger";
import {
  DRAFTS_WITHOUT_SESSION,
  type DynamicFetchOptions,
  getDynamicFetchOptions,
  resolvePageFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  sanityFetchStaticParams,
} from "@workspace/sanity/live";
import {
  queryProjectPaths,
  queryProjectSlugPageData,
} from "@workspace/sanity/query";
import { BlockEyebrow } from "@workspace/sanity-blocks/internal/block-eyebrow";
import { formatMonthYear } from "@workspace/sanity-blocks/internal/personal";
import {
  RichText,
  type RichTextValue,
} from "@workspace/sanity-blocks/internal/rich-text";
import { SanityImage } from "@workspace/sanity-blocks/internal/sanity-image";
import { ButtonLink } from "@workspace/ui/components/button-link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { seoFromDocument } from "@/lib/seo";
import { PLACEHOLDER_SLUG } from "@/utils";

// Keep: this route awaits params outside Suspense on purpose, which Partial
// Prefetching rejects at runtime with a 500 unless the route may block.
export const instant = false;

const logger = new Logger("ProjectSlug");

type ProjectParams = { slug: string };

const toSlug = (slug: string) => `/projects/${slug}`;

export async function generateStaticParams() {
  try {
    const { data: slugs } = await sanityFetchStaticParams({
      query: queryProjectPaths,
    });
    const paths = (slugs ?? []).flatMap((slug) => {
      const path = slug?.split("/")[2];
      return path ? [{ slug: path }] : [];
    });
    return paths.length > 0 ? paths : [{ slug: PLACEHOLDER_SLUG }];
  } catch (error) {
    logger.error("Error fetching project paths", error);
    return [{ slug: PLACEHOLDER_SLUG }];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectParams>;
}): Promise<Metadata> {
  const [{ slug }, { perspective }] = await Promise.all([
    params,
    getDynamicFetchOptions(),
  ]);
  const { data } = await sanityFetchMetadata({
    query: queryProjectSlugPageData,
    params: { slug: toSlug(slug) },
    perspective,
  });
  return seoFromDocument(data, { slug: toSlug(slug) });
}

export default async function ProjectSlugPage({
  params,
}: Readonly<{ params: Promise<ProjectParams> }>) {
  const { isEnabled: isDraftMode } = await draftMode();
  if (isDraftMode || DRAFTS_WITHOUT_SESSION) {
    return <ProjectSlugInner params={params} />;
  }
  const { slug } = await params;
  const data = await getPublishedProject(slug);
  if (!data) {
    notFound();
  }
  return <ProjectPageContent data={data} />;
}

async function getPublishedProject(slug: string) {
  "use cache";
  const { data } = await sanityFetch({
    query: queryProjectSlugPageData,
    params: { slug: toSlug(slug) },
    perspective: "published",
    stega: false,
  });
  return data;
}

type ProjectPageData = NonNullable<
  Awaited<ReturnType<typeof getPublishedProject>>
>;

async function ProjectSlugInner({
  params,
}: Readonly<{ params: Promise<ProjectParams> }>) {
  const [{ slug }, { perspective, stega }] = await Promise.all([
    params,
    resolvePageFetchOptions(),
  ]);
  const data = await getDraftProject({ slug, perspective, stega });
  if (!data) {
    notFound();
  }
  return <ProjectPageContent data={data} />;
}

async function getDraftProject({
  slug,
  perspective,
  stega,
}: ProjectParams & DynamicFetchOptions) {
  "use cache";
  const { data } = await sanityFetch({
    query: queryProjectSlugPageData,
    params: { slug: toSlug(slug) },
    perspective,
    stega,
  });
  return data;
}

function ProjectPageContent({ data }: Readonly<{ data: ProjectPageData }>) {
  const { title, description, url, tags, logo, coverImage, organization } =
    data;
  const start = formatMonthYear(data.startDate);
  const end = data.endDate ? formatMonthYear(data.endDate) : "Present";

  return (
    <main className="bg-background">
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: title },
        ]}
      />
      <article className="container flex flex-col gap-12 pt-12 pb-24 md:pt-16">
        <header className="grid gap-8 border-border border-b pb-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <div className="flex items-center gap-4">
              {logo?.id ? (
                <span className="grid size-16 place-items-center border border-border bg-grid-dots text-border">
                  <SanityImage
                    className="size-9 object-contain"
                    height={80}
                    image={logo}
                    width={80}
                  />
                </span>
              ) : null}
              {organization?.name ? (
                <BlockEyebrow eyebrow={organization.name} />
              ) : null}
            </div>
            <h1 className="font-semibold text-5xl uppercase tracking-[-0.04em] sm:text-7xl">
              {title}
            </h1>
            {description ? (
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            ) : null}
          </div>
          <dl className="flex flex-col gap-4 self-end font-mono text-xs uppercase tracking-[0.08em] lg:col-span-4 lg:items-end">
            {start ? (
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Timeline</dt>
                <dd>
                  {start} — {end}
                </dd>
              </div>
            ) : null}
            {tags?.length ? (
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <dt className="sr-only">Tags</dt>
                {tags.map((tag) => (
                  <dd className="border border-border px-2 py-1" key={tag}>
                    {tag}
                  </dd>
                ))}
              </div>
            ) : null}
            {url ? (
              <ButtonLink href={url} rel="noopener" variant="outline">
                Visit site
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            ) : null}
          </dl>
        </header>
        {coverImage?.id ? (
          <SanityImage
            className="aspect-video w-full border border-border object-cover"
            height={900}
            image={coverImage}
            loading="eager"
            mode="cover"
            sizes="(min-width: 1440px) 1400px, 100vw"
            width={1600}
          />
        ) : null}
        {data.richText?.length ? (
          <RichText
            className="prose-lg max-w-3xl"
            richText={data.richText as RichTextValue}
          />
        ) : null}
      </article>
    </main>
  );
}
