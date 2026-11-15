import { roleFields, rolesOrdering } from "../internal/personal";

export const currentRolesGroqProjection = /* groq */ `
  _type == "currentRoles" => {
    ...,
    "roles": *[_type == "role" && defined(organization) && !defined(duration.end)]
      | ${rolesOrdering}{ ${roleFields} }
  }
`;
