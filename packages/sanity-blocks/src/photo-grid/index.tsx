import { BlockEyebrow } from "@workspace/sanity-blocks/internal/block-eyebrow";
import {
  SanityImage,
  type SanityImageData,
} from "@workspace/sanity-blocks/internal/sanity-image";

export interface PhotoGridProps {
  eyebrow?: string | null;
  title?: string | null;
  photos?: Array<SanityImageData & { _key: string }> | null;
}

export function PhotoGrid({
  eyebrow,
  title,
  photos,
}: Readonly<PhotoGridProps>) {
  if (!photos?.length) {
    return null;
  }

  return (
    <section
      aria-label={title ?? "Photography"}
      className="border-border border-b"
    >
      <div className="container py-5">
        <BlockEyebrow eyebrow={eyebrow} />
      </div>
      <ul className="container grid grid-cols-2 gap-px border-border border-t bg-border sm:grid-cols-3 lg:grid-cols-5">
        {photos.map((photo, index) => (
          <li
            className={
              index >= 4
                ? "hidden bg-background p-3 sm:block"
                : "bg-background p-3"
            }
            key={photo._key}
          >
            <SanityImage
              className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0"
              height={700}
              image={photo}
              mode="cover"
              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw"
              width={560}
            />
            {photo.alt ? (
              <p className="mt-3 line-clamp-1 font-mono text-muted-foreground text-xs uppercase tracking-[0.08em]">
                {photo.alt}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
