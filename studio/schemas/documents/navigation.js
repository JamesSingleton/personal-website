export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id',
    },
    {
      name: 'itms',
      type: 'array',
      title: 'Navigation Items',
      of: [{ type: 'navigationItem' }],
    },
  ],
}
