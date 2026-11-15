import { buttonsFragment } from "../internal/groq-fragments";

export const introHeroGroqProjection = /* groq */ `
  _type == "introHero" => {
    ...,
    ${buttonsFragment},
    "profile": *[_type == "profile" && _id == "profile"][0]{ name, tagline, summary, location },
    "socials": *[_type == "settings" && _id == "settings"][0].socialLinks{ github, linkedin, twitter, instagram }
  }
`;
