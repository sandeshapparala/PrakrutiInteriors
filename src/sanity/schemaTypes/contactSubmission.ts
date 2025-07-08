import {defineField, defineType} from 'sanity'

export const contactSubmission = defineType({
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required().min(2).max(100),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.min(10).max(15),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Residential Interior', value: 'residential'},
          {title: 'Commercial Interior', value: 'commercial'},
          {title: 'Office Design', value: 'office'},
          {title: 'Restaurant Design', value: 'restaurant'},
          {title: 'Retail Space', value: 'retail'},
          {title: 'Complete Home Renovation', value: 'home-renovation'},
          {title: 'Room Renovation', value: 'room-renovation'},
          {title: 'Consultation Only', value: 'consultation'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Contacted', value: 'contacted'},
          {title: 'Quoted', value: 'quoted'},
          {title: 'Converted', value: 'converted'},
          {title: 'Closed', value: 'closed'},
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      }
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Internal notes for team members',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      projectType: 'projectType',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare({name, email, projectType, status, submittedAt}) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : 'Unknown'
      return {
        title: name || 'Unknown Name',
        subtitle: `${email} • ${projectType} • ${status} • ${date}`,
      }
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{field: 'submittedAt', direction: 'desc'}]
    },
    {
      title: 'Oldest First',
      name: 'oldestFirst',
      by: [{field: 'submittedAt', direction: 'asc'}]
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}]
    },
    {
      title: 'Status',
      name: 'status',
      by: [{field: 'status', direction: 'asc'}]
    }
  ]
})
