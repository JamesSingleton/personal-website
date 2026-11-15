import { ButtonLink } from "@workspace/ui/components/button-link";
import { BlockEyebrow } from "@workspace/sanity-blocks/internal/block-eyebrow";
import {
  type PersonalRole,
  roleDates,
} from "@workspace/sanity-blocks/internal/personal";
import { SanityImage } from "@workspace/sanity-blocks/internal/sanity-image";
import { ArrowDown } from "lucide-react";

export interface CareerListProps {
  eyebrow?: string | null;
  title?: string | null;
  intro?: string | null;
  roles?: PersonalRole[] | null;
  resumeUrl?: string | null;
}

export function CareerList({
  eyebrow,
  title,
  intro,
  roles,
  resumeUrl,
}: Readonly<CareerListProps>) {
  return (
    <section className="border-border border-b">
      <div className="container grid lg:grid-cols-12">
        <div className="flex flex-col gap-6 border-border border-b py-8 lg:col-span-4 lg:border-r lg:border-b-0 lg:pr-8">
          <BlockEyebrow eyebrow={eyebrow} />
          <h2
            className="font-semibold text-4xl uppercase tracking-[-0.03em] sm:text-5xl"
            data-inline-edit
          >
            {title}
          </h2>
          {intro ? <p className="text-muted-foreground">{intro}</p> : null}
          <ButtonLink
            className="self-start"
            disabled={!resumeUrl}
            href={resumeUrl ? `${resumeUrl}?dl=` : undefined}
          >
            Download Resume
            <ArrowDown aria-hidden="true" className="size-3.5" />
          </ButtonLink>
        </div>
        <ol className="lg:col-span-8">
          {(roles ?? []).map((role) => {
            const { start, end } = roleDates(role);
            return (
              <li
                className="grid grid-cols-[2.5rem_1fr] items-center gap-x-5 gap-y-1 border-border border-b py-5 last:border-b-0 sm:grid-cols-[2.5rem_1fr_auto] lg:pl-8"
                key={role._id}
              >
                <span className="row-span-2 grid size-10 place-items-center border border-border bg-grid-dots text-border sm:row-span-1">
                  {role.organization?.logo ? (
                    <SanityImage
                      className="size-6 object-contain"
                      height={48}
                      image={role.organization.logo}
                      width={48}
                    />
                  ) : null}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium">{role.title}</p>
                  <p className="truncate text-muted-foreground text-sm">
                    {role.organization?.name}
                  </p>
                </div>
                <p className="flex items-center gap-2 font-mono text-muted-foreground text-xs uppercase tabular-nums tracking-[0.08em] sm:justify-end">
                  {role.endDate ? null : (
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-accent-green"
                    />
                  )}
                  <time dateTime={role.startDate ?? undefined}>{start}</time>
                  <span aria-hidden="true">—</span>
                  {role.endDate ? (
                    <time dateTime={role.endDate}>{end}</time>
                  ) : (
                    end
                  )}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
