import { imageFields } from "../internal/groq-fragments";

export const photoGridGroqProjection = /* groq */ `
  _type == "photoGrid" => {
    ...,
    "photos": photos[]{ _key, ${imageFields} }
  }
`;
