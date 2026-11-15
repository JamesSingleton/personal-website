import { roleFields, rolesOrdering } from "../internal/personal";

export const careerListGroqProjection = /* groq */ `
  _type == "careerList" => {
    ...,
    "roles": *[_type == "role" && defined(organization)]
      | ${rolesOrdering}{ ${roleFields} },
    "resumeUrl": *[_type == "profile" && _id == "profile"][0].resume.asset->url
  }
`;
