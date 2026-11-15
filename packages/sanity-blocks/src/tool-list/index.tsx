import { BlockEyebrow } from "@workspace/sanity-blocks/internal/block-eyebrow";
import { ArrowUpRight } from "lucide-react";

export interface ToolListCategory {
  _id: string;
  title?: string | null;
  tools?: Array<{
    _id: string;
    name?: string | null;
    description?: string | null;
    url?: string | null;
  }> | null;
}

export interface ToolListProps {
  eyebrow?: string | null;
  categories?: ToolListCategory[] | null;
}

export function ToolList({ eyebrow, categories }: Readonly<ToolListProps>) {
  if (!categories?.length) {
    return null;
  }

  return (
    <section className="border-border border-b">
      {eyebrow ? (
        <div className="container py-5">
          <BlockEyebrow eyebrow={eyebrow} />
        </div>
      ) : null}
      {categories.map((category) => (
        <div
          className="container grid border-border border-t lg:grid-cols-12"
          key={category._id}
        >
          <h2 className="py-6 font-mono text-muted-foreground text-xs uppercase tracking-[0.08em] lg:col-span-3">
            {category.title}
          </h2>
          <ul className="lg:col-span-9">
            {(category.tools ?? []).map((tool) => (
              <li
                className="border-border border-b py-6 last:border-b-0 lg:border-l lg:pl-8"
                key={tool._id}
              >
                <h3 className="font-semibold text-lg tracking-tight">
                  {tool.url ? (
                    <a
                      className="inline-flex items-center gap-1 hover:underline"
                      href={tool.url}
                      rel="noopener"
                    >
                      {tool.name}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  ) : (
                    tool.name
                  )}
                </h3>
                <p className="mt-1 text-muted-foreground">{tool.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
