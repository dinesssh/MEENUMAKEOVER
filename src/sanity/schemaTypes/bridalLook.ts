import {defineField, defineType} from 'sanity'

export const bridalLookType = defineType({
  name: 'bridalLook',
  title: 'Bridal Look',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Bridal', value: 'Bridal'},
          {title: 'Engagement', value: 'Engagement'},
          {title: 'Reception', value: 'Reception'},
          {title: 'Mehendi', value: 'Mehendi'},
          {title: 'Microblading', value: 'Microblading'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      description: 'Featured looks appear first in the gallery',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
