export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
        {
          type: 'post',
        },
      ],
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description:
        "Use fully qualified URLs for external links. Example: 'https://www.example.com'",
      type: 'url',
    },
  ],
}
