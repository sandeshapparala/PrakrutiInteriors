import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200)
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          }
        }
      ],
      validation: (Rule) => Rule.max(10)
    }),
    defineField({
      name: 'year',
      title: 'Completion Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(new Date().getFullYear() + 1)
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Office', value: 'office'},
          {title: 'Restaurant', value: 'restaurant'},
          {title: 'Hotel', value: 'hotel'},
          {title: 'Apartment', value: 'apartment'},
          {title: 'Villa', value: 'villa'},
          {title: 'Showroom', value: 'showroom'}
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'area',
      title: 'Project Area (sq ft)',
      type: 'number',
      description: 'Project area in square feet'
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Interior Design', value: 'interior-design'},
          {title: 'Modular Kitchen', value: 'modular-kitchen'},
          {title: 'Bedroom Interiors', value: 'bedroom-interiors'},
          {title: 'Living Room Design', value: 'living-room-design'},
          {title: 'Office Interiors', value: 'office-interiors'},
          {title: 'Furniture & Decor', value: 'furniture-decor'},
          {title: 'Complete Home Solutions', value: 'complete-home'},
          {title: 'Space Planning', value: 'space-planning'},
          {title: 'Lighting Design', value: 'lighting-design'},
          {title: 'Color Consultation', value: 'color-consultation'}
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as featured to highlight this project on the homepage'
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Optional - can be kept private'
    }),
    defineField({
      name: 'description',
      title: 'Detailed Description',
      type: 'text',
      rows: 6,
      description: 'Detailed project description for individual project pages'
    }),
    defineField({
      name: 'challenges',
      title: 'Project Challenges',
      type: 'text',
      rows: 4,
      description: 'What challenges were faced and how they were solved'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'location',
      year: 'year'
    },
    prepare(selection) {
      const {title, media, subtitle, year} = selection
      return {
        title,
        media,
        subtitle: `${subtitle} (${year})`
      }
    }
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Oldest First',
      name: 'publishedAtAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
    {
      title: 'Year (Newest)',
      name: 'yearDesc',
      by: [
        {field: 'year', direction: 'desc'}
      ]
    }
  ]
})
