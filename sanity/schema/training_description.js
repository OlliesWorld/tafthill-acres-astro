
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'training_description',
    type: 'document',
      title: 'Training Description',
      fields: [        
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
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