export const toolListGroqProjection = /* groq */ `
  _type == "toolList" => {
    ...,
    "categories": *[_type == "toolCategory"] | order(orderRank asc, title asc){
      _id,
      title,
      "tools": *[_type == "tool" && references(^._id)] | order(name asc){
        _id,
        name,
        description,
        url
      }
    }[count(tools) > 0]
  }
`;
