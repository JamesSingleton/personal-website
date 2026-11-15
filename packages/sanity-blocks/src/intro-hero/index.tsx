import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@workspace/sanity-blocks/internal/icons";
import type { ButtonProps } from "@workspace/sanity-blocks/internal/sanity-buttons";
import { SanityButtons } from "@workspace/sanity-blocks/internal/sanity-buttons";

export interface IntroHeroProps {
  headline?: string | null;
  intro?: string | null;
  buttons?: ButtonProps[] | null;
  profile?: {
    name?: string | null;
    tagline?: string | null;
    summary?: string | null;
    location?: string | null;
  } | null;
  socials?: {
    github?: string | null;
    linkedin?: string | null;
    twitter?: string | null;
    instagram?: string | null;
  } | null;
}

export function splitHeadline(headline: string): [string, string | null] {
  const index = headline.indexOf(", ");
  return index === -1
    ? [headline, null]
    : [headline.slice(0, index + 1), headline.slice(index + 2)];
}

const socialLinks = [
  { key: "github", label: "GitHub", Icon: GitHubIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "twitter", label: "X", Icon: XIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
] as const;

export function IntroHero({
  headline,
  intro,
  buttons,
  profile,
  socials,
}: Readonly<IntroHeroProps>) {
  const [lineOne, lineTwo] = splitHeadline(
    headline || profile?.tagline || profile?.name || ""
  );
  const body = intro || profile?.summary;
  const links = socialLinks.filter(({ key }) => socials?.[key]);

  return (
    <section className="bg-grid-columns border-border border-b">
      <div className="container pt-20 pb-12 sm:pt-28 lg:pt-36">
        <h1 className="font-semibold text-[clamp(2.25rem,5.6vw,5.5rem)] uppercase leading-[0.92] tracking-[-0.045em]">
          <span className="block" data-inline-edit>
            {lineOne}
          </span>
          {lineTwo ? <span className="block text-right">{lineTwo}</span> : null}
        </h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {body ? (
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed lg:col-span-6">
              {body}
            </p>
          ) : null}
          <SanityButtons
            buttons={buttons}
            className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:justify-end"
          />
        </div>
      </div>
      <div className="container flex flex-col gap-4 border-border border-t bg-background py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.08em]">
          {profile?.location}
        </p>
        {links.length ? (
          <ul className="flex items-center gap-5">
            {links.map(({ key, label, Icon }) => (
              <li key={key}>
                <a
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href={socials?.[key] ?? undefined}
                  rel="me noopener"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
