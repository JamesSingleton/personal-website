import {
  type DynamicFetchOptions,
  getDynamicFetchOptions,
  sanityFetch,
} from "@workspace/sanity/live";
import { queryFooterData } from "@workspace/sanity/query";
import type {
  QueryFooterDataResult,
  QueryGlobalSeoSettingsResult,
} from "@workspace/sanity/types";
import {
  FacebookIcon,
  InstagramBrandIcon,
  LinkedinBrandIcon,
  RedditBrandIcon,
  XBrandIcon,
  YoutubeIcon,
} from "@workspace/sanity-blocks/internal/icons";
import { normalizedLogoHeight } from "@workspace/sanity-blocks/internal/logo-height";
import { SanityImage } from "@workspace/sanity-blocks/internal/sanity-image";
import Link from "next/link";
import { type CSSProperties, Fragment } from "react";

import { FooterThemeToggle } from "@/components/footer-theme-toggle";
import { Logo } from "@/components/logo";
import { getGlobalSettings } from "@/lib/navigation";

type SocialLinksProps = {
  data: NonNullable<QueryGlobalSeoSettingsResult>["socialLinks"];
};

type FooterProps = {
  data: NonNullable<QueryFooterDataResult>;
  settingsData: NonNullable<QueryGlobalSeoSettingsResult>;
};

export async function DynamicFooter() {
  const { perspective, stega } = await getDynamicFetchOptions();
  return <CachedFooter perspective={perspective} stega={stega} />;
}

export async function CachedFooter({
  perspective,
  stega,
}: DynamicFetchOptions) {
  "use cache";
  const [response, settingsData] = await Promise.all([
    sanityFetch({ query: queryFooterData, perspective, stega }),
    getGlobalSettings({ perspective, stega }),
  ]);

  if (!(response?.data && settingsData)) {
    return null;
  }
  return <Footer data={response.data} settingsData={settingsData} />;
}

function SocialLinks({ data }: Readonly<SocialLinksProps>) {
  if (!data) {
    return null;
  }

  const { facebook, twitter, instagram, youtube, linkedin, reddit } = data;

  const socialLinks = [
    {
      url: instagram,
      Icon: InstagramBrandIcon,
      label: "Follow us on Instagram",
    },
    {
      url: facebook,
      Icon: FacebookIcon,
      label: "Follow us on Facebook",
    },
    { url: twitter, Icon: XBrandIcon, label: "Follow us on Twitter" },
    {
      url: linkedin,
      Icon: LinkedinBrandIcon,
      label: "Follow us on LinkedIn",
    },
    {
      url: youtube,
      Icon: YoutubeIcon,
      label: "Subscribe to our YouTube channel",
    },
    {
      url: reddit,
      Icon: RedditBrandIcon,
      label: "Join us on Reddit",
    },
  ].filter((link) => link.url);

  return (
    <ul className="-mx-1.5 flex items-center">
      {socialLinks.map(({ url, Icon, label }, index) => (
        <li key={`social-link-${url}-${index.toString()}`}>
          <Link
            aria-label={label}
            className="focus-ring-inset group inline-flex cursor-pointer items-center justify-center p-1.5 focus-visible:outline-accent-green-foreground!"
            href={url ?? "#"}
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="h-[18px] w-auto fill-accent-green-foreground transition-opacity duration-200 group-hover:opacity-75" />
            <span className="sr-only">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SystemsOperationalPill() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-accent-green-foreground px-3 py-1">
      <span
        aria-hidden="true"
        className="size-2 shrink-0 rounded-full bg-accent-green"
      />
      <span className="font-mono text-accent-green text-xs uppercase leading-5 tracking-[0.3px]">
        All systems operational
      </span>
    </div>
  );
}

function FooterTopBar() {
  return (
    <div className="w-full shrink-0 bg-background [background-image:radial-gradient(circle,var(--color-zinc-500)_0.8px,transparent_1.3px)] [background-position:top] [background-repeat:repeat-x] [background-size:6.7px_1.4px]">
      <div className="container flex items-center justify-center py-4 sm:grid sm:grid-cols-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-[1px] bg-accent-green"
          />
          <p className="whitespace-nowrap font-light font-mono text-muted-foreground text-sm uppercase leading-5 tracking-[0.28px]">
            <span>Engine: </span>
            <span className="text-muted-foreground dark:text-accent-green">
              Turbo Start
            </span>
            <span className="bg-linear-to-r from-transparent to-accent-green bg-clip-text text-transparent">
              {" ///"}
            </span>
          </p>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <p className="whitespace-nowrap font-light font-mono text-muted-foreground text-sm uppercase leading-5 tracking-[0.28px]">
            [ Nitro: Armed ]
          </p>
        </div>
        <div className="hidden items-center justify-end sm:flex">
          <p className="whitespace-nowrap font-light font-mono text-muted-foreground text-sm uppercase leading-5 tracking-[0.28px]">
            [ Ready to Rip ]
          </p>
        </div>
      </div>
    </div>
  );
}

// The "JRS" monogram, one stroke per frame in the order it would be written:
// J's bar, stem and hook; R's slanted top and body; then S's top bar and the
// diagonal it runs into. Every stroke is quantised to the 6px dot grid so none
// is cut mid-dot. The desktop band crops below y≈320, so J's hook and R's bowl
// sit high enough to stay legible there.
const MARK_FRAMES = [
  "M0 0h498v102h-498z",
  "M288 108h210v6h-210zM294 114h204v6h-204zM300 120h198v6h-198zM306 126h192v6h-192zM312 132h186v6h-186zM318 138h180v6h-180zM324 144h174v6h-174zM330 150h168v6h-168zM336 156h162v6h-162zM342 162h156v6h-156zM348 168h150v6h-150zM354 174h144v6h-144zM360 180h138v6h-138zM366 186h132v6h-132zM372 192h126v6h-126zM378 198h120v6h-120zM384 204h114v24h-114z",
  "M0 144h96v84h-96zM90 228h408v6h-408zM84 234h414v6h-414zM78 240h420v6h-420zM72 246h426v6h-426zM66 252h432v6h-432zM60 258h438v6h-438zM54 264h444v6h-444zM48 270h450v6h-450zM42 276h456v6h-456zM36 282h462v6h-462zM30 288h468v6h-468zM24 294h474v6h-474zM18 300h480v6h-480zM12 306h486v6h-486zM6 312h492v6h-492zM0 318h498v6h-498z",
  "M666 0h222v6h-222zM660 6h228v6h-228zM654 12h234v6h-234zM648 18h240v6h-240zM642 24h246v12h-246zM636 36h252v6h-252zM630 42h258v6h-258zM624 48h264v6h-264zM618 54h270v12h-270zM612 66h276v6h-276zM606 72h282v6h-282zM600 78h288v6h-288zM594 84h294v6h-294zM588 90h300v12h-300z",
  "M600 102h96v6h-96zM786 102h102v6h-102zM600 108h96v6h-96zM786 108h102v6h-102zM600 114h96v6h-96zM786 114h102v6h-102zM600 120h96v6h-96zM786 120h102v6h-102zM600 126h96v6h-96zM786 126h102v6h-102zM600 132h96v6h-96zM786 132h102v6h-102zM600 138h96v6h-96zM786 138h102v6h-102zM600 144h96v6h-96zM786 144h102v6h-102zM600 150h96v6h-96zM786 150h102v6h-102zM600 156h96v6h-96zM786 156h102v6h-102zM600 162h288v60h-288zM600 222h204v12h-204zM600 234h96v6h-96zM702 234h108v6h-108zM600 240h96v6h-96zM708 240h108v6h-108zM600 246h96v6h-96zM708 246h108v6h-108zM600 252h96v6h-96zM714 252h108v6h-108zM600 258h96v6h-96zM720 258h108v6h-108zM600 264h96v6h-96zM720 264h108v6h-108zM600 270h96v6h-96zM726 270h108v6h-108zM600 276h96v6h-96zM732 276h108v6h-108zM600 282h96v6h-96zM738 282h108v6h-108zM600 288h96v6h-96zM738 288h108v6h-108zM600 294h96v6h-96zM744 294h108v6h-108zM600 300h96v6h-96zM750 300h108v6h-108zM600 306h96v6h-96zM750 306h108v6h-108zM600 312h96v6h-96zM756 312h108v6h-108zM600 318h96v6h-96zM762 318h108v6h-108zM600 324h96v6h-96zM762 324h108v6h-108zM600 330h96v6h-96zM768 330h108v6h-108zM600 336h96v6h-96zM774 336h108v6h-108zM600 342h96v6h-96zM780 342h108v6h-108zM600 348h96v6h-96zM780 348h108v6h-108zM600 354h96v6h-96zM786 354h102v6h-102zM600 360h96v6h-96zM792 360h96v6h-96zM600 366h96v6h-96zM792 366h96v6h-96zM600 372h96v6h-96zM798 372h90v6h-90zM600 378h96v6h-96zM804 378h84v6h-84zM600 384h96v6h-96zM804 384h84v6h-84zM600 390h96v6h-96zM810 390h78v6h-78zM600 396h96v6h-96zM816 396h72v6h-72zM600 402h96v6h-96zM822 402h66v6h-66zM600 408h96v6h-96zM822 408h66v6h-66zM600 414h96v6h-96zM828 414h60v6h-60zM600 420h96v6h-96zM834 420h54v6h-54zM600 426h96v6h-96zM834 426h54v6h-54zM600 432h96v6h-96zM840 432h48v6h-48zM600 438h96v6h-96zM846 438h42v6h-42zM600 444h96v6h-96zM846 444h42v6h-42zM600 450h96v6h-96zM852 450h36v6h-36zM600 456h96v6h-96zM858 456h30v6h-30zM600 462h96v6h-96zM864 462h24v6h-24zM600 468h96v6h-96zM864 468h24v6h-24zM600 474h96v6h-96zM870 474h18v6h-18zM600 480h96v6h-96zM876 480h12v6h-12zM600 486h96v6h-96zM876 486h12v6h-12zM600 492h96v6h-96zM882 492h6v6h-6zM600 498h96v18h-96z",
  "M1092 0h264v6h-264zM1086 6h270v12h-270zM1080 18h276v6h-276zM1074 24h282v6h-282zM1068 30h288v6h-288zM1062 36h294v12h-294zM1056 48h300v6h-300zM1050 54h306v6h-306zM1044 60h312v6h-312zM1038 66h318v6h-318zM1032 72h324v12h-324zM1026 84h330v6h-330zM1020 90h336v6h-336zM1014 96h342v6h-342z",
  "M924 102h6v6h-6zM1356 102h84v90h-84zM924 108h18v6h-18zM924 114h30v6h-30zM924 120h48v6h-48zM924 126h60v6h-60zM924 132h72v6h-72zM924 138h90v6h-90zM924 144h102v6h-102zM924 150h114v6h-114zM924 156h132v6h-132zM924 162h144v6h-144zM924 168h156v6h-156zM924 174h174v6h-174zM924 180h186v6h-186zM924 186h198v6h-198zM924 192h216v6h-216zM924 198h228v6h-228zM924 204h240v6h-240zM936 210h246v6h-246zM954 216h240v6h-240zM966 222h240v6h-240zM984 228h234v6h-234zM996 234h240v6h-240zM1014 240h234v6h-234zM1032 246h228v6h-228zM1044 252h234v6h-234zM1062 258h228v6h-228zM1074 264h228v6h-228zM1092 270h228v6h-228zM1104 276h228v6h-228zM1122 282h222v6h-222zM1134 288h228v6h-228zM1152 294h222v6h-222zM1164 300h222v6h-222zM1182 306h222v6h-222zM1194 312h222v6h-222zM1212 318h216v6h-216zM1224 324h216v6h-216zM1242 330h198v6h-198zM1254 336h186v6h-186zM1272 342h168v6h-168zM1284 348h156v6h-156zM1302 354h138v6h-138zM1314 360h126v6h-126zM1332 366h108v6h-108zM1344 372h96v6h-96zM1362 378h78v6h-78zM1374 384h66v6h-66zM1392 390h48v6h-48zM1404 396h36v6h-36zM1422 402h18v6h-18zM1434 408h6v6h-6zM1008 414h342v6h-342zM1008 420h336v6h-336zM1008 426h330v6h-330zM1008 432h324v12h-324zM1008 444h318v6h-318zM1008 450h312v6h-312zM1008 456h306v6h-306zM1008 462h300v12h-300zM1008 474h294v6h-294zM1008 480h288v6h-288zM1008 486h282v6h-282zM1008 492h276v6h-276zM1008 498h270v12h-270zM1008 510h264v6h-264z",
];

/** Decorative slash motif closing the footer.
 *
 * The geometry is the design's artwork quantised to the 6px dot grid: every
 * kept cell is a whole pitch wide, so shape edges land on cell boundaries and
 * the pattern's dot — centred in each cell — is never sliced by an edge. That's
 * why the diagonals read as steps rather than clean lines. The band's shorter
 * aspect crops the lower half of the motif off. */
function FooterMark() {
  return (
    <div
      aria-hidden="true"
      className="mt-auto aspect-[1440/516] w-full shrink-0 overflow-hidden text-accent-green-foreground sm:aspect-[1440/320] sm:min-h-0 sm:shrink"
    >
      <svg
        aria-hidden="true"
        className="w-full motion-reduce:[&_path]:animate-none"
        viewBox="0 0 1440 516"
      >
        <defs>
          <pattern
            height="6"
            id="footer-mark-dots"
            patternUnits="userSpaceOnUse"
            width="6"
          >
            <circle cx="3" cy="3" fill="currentColor" r="0.7" />
          </pattern>
        </defs>
        {MARK_FRAMES.map((frame, index) => (
          <path
            className="mark-frame"
            d={frame}
            fill="url(#footer-mark-dots)"
            key={frame.slice(0, 16)}
            style={{ "--frame-index": index } as CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}

function Footer({ data, settingsData }: Readonly<FooterProps>) {
  const { subtitle, columns, copyright, credits } = data;
  const { siteTitle, socialLinks, logos } = settingsData;
  const logo = logos?.logo;
  const footerLogo = logos?.footerLogo;
  const year = new Date().getFullYear();

  return (
    <>
      <FooterTopBar />
      <footer className="relative flex flex-col border-t border-accent-green-foreground/10 bg-accent-green text-accent-green-foreground max-sm:min-h-[calc(100lvh+3rem)] sm:min-h-0 sm:flex-1">
        <div className="container flex flex-col items-start gap-10 pt-12 text-start lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full max-w-96 shrink flex-col items-start gap-6 lg:items-start">
            <div className="flex flex-col items-start gap-4 lg:items-start">
              <span className="flex items-center gap-2">
                <Logo
                  alt={siteTitle ?? "Turbo Start Sanity"}
                  className={
                    footerLogo
                      ? "h-5 w-auto object-left"
                      : "h-5 w-auto object-left brightness-0"
                  }
                  image={footerLogo ?? logo}
                  linkClassName="focus-ring focus-visible:outline-accent-green-foreground!"
                />
              </span>
              {subtitle && (
                <p className="text-accent-green-foreground/70 text-sm leading-5 tracking-[0.24px]">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:contents">
              <SystemsOperationalPill />
              {socialLinks && <SocialLinks data={socialLinks} />}
            </div>
          </div>
          {Array.isArray(columns) && columns?.length > 0 && (
            <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-14 lg:w-auto">
              {columns.map((column, index) => (
                <div key={`column-${column?._key}-${index}`}>
                  <h3 className="mb-2 font-light font-mono text-accent-green-foreground/60 text-sm uppercase tracking-[0.28px]">
                    {column?.title}
                  </h3>
                  {column?.links && column?.links?.length > 0 && (
                    <ul className="space-y-1 text-accent-green-foreground text-sm leading-6">
                      {column?.links?.map((link, columnIndex) => (
                        <li
                          key={`${link?._key}-${columnIndex}-column-${column?._key}`}
                        >
                          <Link
                            className="link-underline after:-bottom-0.5! rounded-sm focus-ring after:transition-none! outline-accent-green-foreground!"
                            href={link.href ?? "#"}
                            rel={
                              link.openInNewTab
                                ? "noopener noreferrer"
                                : undefined
                            }
                            target={link.openInNewTab ? "_blank" : undefined}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="container relative z-10 pt-6 pb-6 lg:my-12 lg:pt-8 lg:pb-8">
          <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 text-start lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <p className="row-start-2 text-accent-green-foreground/80 text-sm tracking-[0.24px] lg:row-auto">
              {copyright ?? `© ${year} ${siteTitle}. All rights reserved.`}
            </p>
            <div className="contents lg:flex lg:flex-row lg:items-center lg:gap-4">
              {credits && credits.length > 0 && (
                <div className="col-span-2 row-start-1 flex flex-wrap items-center gap-x-4 gap-y-2 pb-10 text-accent-green-foreground/70 text-sm tracking-[0.24px] lg:col-auto lg:row-auto lg:flex-nowrap lg:pb-0">
                  {credits.map((item, index) => {
                    const logoHeight = normalizedLogoHeight(item.logo, {
                      base: 34,
                      min: 11,
                      max: 18,
                    });
                    const creditContent = (
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        {item.label}
                        {item.logo?.id && (
                          <span className="flex shrink-0 items-center">
                            <SanityImage
                              className="w-auto max-w-none rounded-none! object-contain"
                              height={logoHeight}
                              image={item.logo}
                              loading="lazy"
                              style={{ height: logoHeight }}
                              width={75}
                            />
                          </span>
                        )}
                      </span>
                    );

                    return (
                      <Fragment key={item._key}>
                        {index > 0 && (
                          <span
                            aria-hidden="true"
                            className="hidden h-4 w-px shrink-0 bg-accent-green-foreground/30 sm:block"
                          />
                        )}
                        {item.url ? (
                          <a
                            className="focus-ring rounded-none hover:opacity-90 focus-visible:outline-accent-green-foreground!"
                            href={item.url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {creditContent}
                          </a>
                        ) : (
                          creditContent
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              )}
              <div className="col-start-2 row-start-2 justify-self-end lg:col-auto lg:row-auto">
                <FooterThemeToggle />
              </div>
            </div>
          </div>
        </div>
        <FooterMark />
      </footer>
    </>
  );
}
