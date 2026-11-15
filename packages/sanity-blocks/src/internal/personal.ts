import { imageFields } from "./groq-fragments";

/** Mirrors `SanityImageData` without importing the client component module. */
interface SanityImageData {
  id?: string | null;
  alt?: string | null;
  preview?: string | null;
  hotspot?: { x: number; y: number } | null;
  crop?: { bottom: number; left: number; right: number; top: number } | null;
}

export interface PersonalRole {
  _id: string;
  title?: string | null;
  kind?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  summary?: string | null;
  organization?: {
    name?: string | null;
    url?: string | null;
    logo?: SanityImageData | null;
  } | null;
}

export interface PersonalProject {
  _id: string;
  title?: string | null;
  slug?: string | null;
  description?: string | null;
  url?: string | null;
  tags?: string[] | null;
  category?: string | null;
  logo?: SanityImageData | null;
  coverImage?: SanityImageData | null;
}

export const roleKindLabels: Record<string, string> = {
  employment: "Engineering",
  founder: "Founder",
  coaching: "Coaching",
  volunteer: "Volunteer",
};

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonthYear(date: string | null | undefined): string {
  return date ? monthYear.format(new Date(date)) : "";
}

export function yearOf(date: string | null | undefined): string {
  return date?.slice(0, 4) ?? "";
}

export function roleDates(role: Pick<PersonalRole, "startDate" | "endDate">) {
  const start = formatMonthYear(role.startDate);
  const end = role.endDate ? formatMonthYear(role.endDate) : "Present";
  return { start, end, label: `${start} until ${end}` };
}

export const roleFields = /* groq */ `
  _id,
  title,
  kind,
  "startDate": duration.start,
  "endDate": duration.end,
  summary,
  organization->{
    name,
    url,
    "logo": logo{ ${imageFields} }
  }
`;

export const rolesOrdering = /* groq */ `
  order(coalesce(duration.end, "9999-12-31") desc, duration.start desc)
`;

export const projectFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  description,
  url,
  tags,
  category,
  "logo": coalesce(logo, organization->logo){ ${imageFields} },
  "coverImage": coverImage{ ${imageFields} }
`;
