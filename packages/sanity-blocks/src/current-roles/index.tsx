import { BlockEyebrow } from "@workspace/sanity-blocks/internal/block-eyebrow";
import {
  type PersonalRole,
  roleKindLabels,
  yearOf,
} from "@workspace/sanity-blocks/internal/personal";
import { SanityImage } from "@workspace/sanity-blocks/internal/sanity-image";

export interface CurrentRolesProps {
  eyebrow?: string | null;
  title?: string | null;
  roles?: PersonalRole[] | null;
}

export function CurrentRoles({
  eyebrow,
  title,
  roles,
}: Readonly<CurrentRolesProps>) {
  if (!roles?.length) {
    return null;
  }

  return (
    <section
      aria-label={title ?? "What I'm doing now"}
      className="border-border border-b"
    >
      <div className="container py-5">
        <BlockEyebrow eyebrow={eyebrow} />
      </div>
      <ul className="container grid border-border border-t sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <li
            className="flex items-start gap-5 border-border border-b py-6 sm:px-6 lg:border-r lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"
            key={role._id}
          >
            <div className="grid size-14 shrink-0 place-items-center border border-border bg-grid-dots text-border">
              {role.organization?.logo ? (
                <SanityImage
                  className="size-8 object-contain"
                  height={64}
                  image={role.organization.logo}
                  width={64}
                />
              ) : (
                <span className="font-semibold text-foreground text-xl uppercase">
                  {role.organization?.name?.slice(0, 1)}
                </span>
              )}
            </div>
            <div className="min-w-0">
              <p className="flex items-center gap-2 font-mono text-muted-foreground text-xs uppercase tracking-[0.08em]">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent-green"
                />
                {roleKindLabels[role.kind ?? ""] ?? role.kind}
              </p>
              <p className="mt-2 font-semibold text-xl leading-tight tracking-tight">
                {role.title}
              </p>
              <p className="mt-1 text-muted-foreground">
                {role.organization?.name}
                <span className="ml-2 font-mono text-xs uppercase tracking-[0.08em]">
                  since {yearOf(role.startDate)}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
