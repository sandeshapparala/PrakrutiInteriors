import {defineField, defineType} from 'sanity'

export const feedback = defineType({
  name: 'feedback',
  title: 'Customer Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
      description: 'Full name of the customer providing feedback'
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      description: 'Customer email address for follow-up'
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.min(10).max(15),
      description: 'Customer phone number (optional)'
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Living Room Design', value: 'living-room'},
          {title: 'Modular Kitchen', value: 'kitchen'},
          {title: 'Bedroom Interiors', value: 'bedroom'},
          {title: 'Office Spaces', value: 'office'},
          {title: 'Complete Home', value: 'complete-home'},
          {title: 'Furniture & Decor', value: 'furniture'},
          {title: 'Other', value: 'other'}
        ]
      },
      validation: (Rule) => Rule.required(),
      description: 'Type of project or service provided'
    }),
    defineField({
      name: 'rating',
      title: 'Overall Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      description: 'Star rating out of 5',
      options: {
        list: [
          {title: '⭐ 1 Star', value: 1},
          {title: '⭐⭐ 2 Stars', value: 2},
          {title: '⭐⭐⭐ 3 Stars', value: 3},
          {title: '⭐⭐⭐⭐ 4 Stars', value: 4},
          {title: '⭐⭐⭐⭐⭐ 5 Stars', value: 5}
        ]
      }
    }),
    defineField({
      name: 'feedbackText',
      title: 'Feedback Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000),
      description: 'Detailed feedback from the customer'
    }),
    defineField({
      name: 'workQuality',
      title: 'Work Quality Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      description: 'Rating for work quality (1-5 stars)'
    }),
    defineField({
      name: 'timeManagement',
      title: 'Time Management Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      description: 'Rating for project timeline management (1-5 stars)'
    }),
    defineField({
      name: 'communication',
      title: 'Communication Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      description: 'Rating for team communication (1-5 stars)'
    }),
    defineField({
      name: 'wouldRecommend',
      title: 'Would Recommend to Others?',
      type: 'boolean',
      initialValue: true,
      description: 'Would the customer recommend Prakruti Interiors to others?'
    }),
    defineField({
      name: 'isPublic',
      title: 'Display as Public Testimonial',
      type: 'boolean',
      initialValue: false,
      description: 'Show this feedback as a public testimonial on the website'
    }),
    defineField({
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
      description: 'Hide/show this feedback (for admin use)'
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submission Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'Date and time when feedback was submitted'
    }),
    defineField({
      name: 'adminNotes',
      title: 'Admin Notes',
      type: 'text',
      description: 'Internal notes for admin use (not visible to customer)'
    }),
    defineField({
      name: 'followUpRequired',
      title: 'Follow-up Required',
      type: 'boolean',
      initialValue: false,
      description: 'Mark if this feedback requires follow-up action'
    })
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'projectType',
      rating: 'rating',
      email: 'email'
    },
    prepare(selection) {
      const {title, subtitle, rating, email} = selection
      const stars = '⭐'.repeat(rating || 0)
      return {
        title: title || 'Anonymous Customer',
        subtitle: `${subtitle || 'Unknown Project'} ${stars} - ${email}`,
      }
    }
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [
        {field: 'submittedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Highest Rating First',
      name: 'ratingDesc',
      by: [
        {field: 'rating', direction: 'desc'},
        {field: 'submittedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Follow-up Required',
      name: 'followUpFirst',
      by: [
        {field: 'followUpRequired', direction: 'desc'},
        {field: 'submittedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Public Testimonials',
      name: 'publicFirst',
      by: [
        {field: 'isPublic', direction: 'desc'},
        {field: 'rating', direction: 'desc'}
      ]
    }
  ]
})
