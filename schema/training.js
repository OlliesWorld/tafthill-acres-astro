import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'training',
    type: 'document',
      title: 'Training',
      icon,
      fields: [        
          defineField({
            name: 'trainerImage',
            title: 'Trainer image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
          name: 'trainer',
          title: 'Trainer',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'SubTitle',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'blockContent',
        }),
          defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'trainer',
            maxLength: 96,
          },
        }),
      ]
  })