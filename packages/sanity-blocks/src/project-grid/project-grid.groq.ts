import { projectFields } from "../internal/personal";

export const projectGridGroqProjection = /* groq */ `
  _type == "projectGrid" => {
    ...,
    "items": select(
      mode == "all" => *[_type == "project" && defined(slug.current)]
        | order(orderRank asc, title asc){ ${projectFields} },
      projects[]->{ ${projectFields} }
    )
  }
`;
