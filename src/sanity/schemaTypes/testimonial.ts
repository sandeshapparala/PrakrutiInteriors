import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
      description: 'Full name of the client who provided the testimonial'
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
      description: 'Type of project or service (e.g., Living Room Design, Kitchen Renovation)'
    }),
    defineField({
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
      description: 'The actual testimonial content from the client'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
      description: 'Star rating out of 5'
    }),
    defineField({
      name: 'isActive',
      title: 'Display on Website',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide this testimonial on the website'
    }),
    defineField({
      name: 'dateAdded',
      title: 'Date Added',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'Date when this testimonial was added'
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Order (Optional)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
      description: 'Optional: Custom order for testimonials (leave empty for newest first)'
    }),
    defineField({
      name: 'submissionEmail',
      title: 'Submission Email',
      type: 'string',
      description: 'Email address used when submitting testimonial (for admin reference)',
      readOnly: true
    }),
    defineField({
      name: 'submissionPhone',
      title: 'Submission Phone',
      type: 'string',
      description: 'Phone number provided during submission (for admin reference)',
      readOnly: true
    }),
    defineField({
      name: 'needsReview',
      title: 'Needs Review',
      type: 'boolean',
      initialValue: false,
      description: 'Mark if this testimonial needs admin review before going live'
    })
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'projectType',
      rating: 'rating'
    },
    prepare(selection) {
      const {title, subtitle, rating} = selection
      const stars = '⭐'.repeat(rating || 0)
      return {
        title: title || 'Unnamed Client',
        subtitle: `${subtitle || 'Unknown Project'} ${stars}`,
      }
    }
  },
  orderings: [
    {
      title: 'Newest First (Default)',
      name: 'dateAddedDesc',
      by: [
        {field: 'dateAdded', direction: 'desc'}
      ]
    },
    {
      title: 'Custom Order (if set)',
      name: 'sortOrderAsc',
      by: [
        {field: 'sortOrder', direction: 'asc'},
        {field: 'dateAdded', direction: 'desc'}
      ]
    },
    {
      title: 'Client Name A-Z',
      name: 'nameAsc',
      by: [
        {field: 'clientName', direction: 'asc'}
      ]
    }
  ]
})
