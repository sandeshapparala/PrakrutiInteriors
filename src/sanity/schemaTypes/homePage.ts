import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page Images',
  type: 'document',
  fields: [
    // Hero Section Images
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'interiorDesigns',
          title: 'Interior Design Carousel Images',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'style',
                title: 'Style Name',
                type: 'string',
                description: 'For reference only (Modern Minimalist, Warm Contemporary, etc.)'
              },
              {
                name: 'image',
                title: 'Design Image',
                type: 'image',
                options: {hotspot: true},
                validation: (Rule) => Rule.required()
              }
            ],
            preview: {
              select: {
                title: 'style',
                media: 'image'
              }
            }
          }],
          validation: (Rule) => Rule.min(1).max(10)
        })
      ]
    }),

    // Who We Are Section Images
    defineField({
      name: 'whoWeAreSection',
      title: 'Who We Are Section',
      type: 'object',
      fields: [
        defineField({
          name: 'galleryImages',
          title: 'Image Gallery',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Gallery Image',
                type: 'image',
                options: {hotspot: true},
                validation: (Rule) => Rule.required()
              },
              {
                name: 'caption',
                title: 'Caption (Optional)',
                type: 'string',
                description: 'Optional image description for accessibility'
              }
            ],
            preview: {
              select: {
                title: 'caption',
                media: 'image'
              },
              prepare(selection) {
                const {title, media} = selection
                return {
                  title: title || 'Gallery Image',
                  media
                }
              }
            }
          }],
          validation: (Rule) => Rule.min(3).max(8)
        })
      ]
    }),

    // Services Section Images
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'services',
          title: 'Service Images',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'serviceName',
                title: 'Service Name',
                type: 'string',
                description: 'For reference (Living Room, Kitchen, Bedroom, etc.)',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Service Image',
                type: 'image',
                options: {hotspot: true},
                validation: (Rule) => Rule.required()
              }
            ],
            preview: {
              select: {
                title: 'serviceName',
                media: 'image'
              }
            }
          }],
          validation: (Rule) => Rule.min(4).max(8),
          initialValue: [
            {serviceName: 'Living Room Design'},
            {serviceName: 'Modular Kitchen'},
            {serviceName: 'Bedroom Interiors'},
            {serviceName: 'Furniture & Decor'},
            {serviceName: 'Office Spaces'},
            {serviceName: 'Complete Home Solutions'}
          ]
        })
      ]
    }),

    // Interior Expertise Section Image
    defineField({
      name: 'interiorExpertiseSection',
      title: 'Interior Expertise Section',
      type: 'object',
      fields: [
        defineField({
          name: 'featuredImage',
          title: 'Featured Expertise Image',
          type: 'image',
          options: {hotspot: true},
          validation: (Rule) => Rule.required(),
          description: 'Main image showcasing interior expertise'
        })
      ]
    }),

    // Our Story Section Images
    defineField({
      name: 'ourStorySection',
      title: 'Our Story Section',
      type: 'object',
      fields: [
        defineField({
          name: 'founderImage',
          title: 'Founder/Team Image',
          type: 'image',
          options: {hotspot: true},
          description: 'Image of founder or team for the quote section'
        }),
        defineField({
          name: 'storyImages',
          title: 'Visual Story Images',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Story Image',
                type: 'image',
                options: {hotspot: true},
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string',
                description: 'Brief description for reference'
              }
            ],
            preview: {
              select: {
                title: 'description',
                media: 'image'
              },
              prepare(selection) {
                const {title, media} = selection
                return {
                  title: title || 'Story Image',
                  media
                }
              }
            }
          }],
          validation: (Rule) => Rule.min(2).max(6)
        })
      ]
    }),

    // Projects Section Images
    defineField({
      name: 'projectsSection',
      title: 'Projects Section',
      type: 'object',
      fields: [
        defineField({
          name: 'featuredProjects',
          title: 'Featured Project Images',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'projectName',
                title: 'Project Name',
                type: 'string',
                description: 'For reference and organization',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'category',
                title: 'Category',
                type: 'string',
                options: {
                  list: [
                    {title: 'Residential', value: 'residential'},
                    {title: 'Commercial', value: 'commercial'},
                    {title: 'Office', value: 'office'},
                    {title: 'Restaurant', value: 'restaurant'},
                    {title: 'Hotel', value: 'hotel'}
                  ]
                }
              },
              {
                name: 'image',
                title: 'Project Image',
                type: 'image',
                options: {hotspot: true},
                validation: (Rule) => Rule.required()
              },
              {
                name: 'isFeatured',
                title: 'Featured Project',
                type: 'boolean',
                initialValue: false,
                description: 'Mark as featured to highlight this project'
              }
            ],
            preview: {
              select: {
                title: 'projectName',
                subtitle: 'category',
                media: 'image'
              }
            }
          }],
          validation: (Rule) => Rule.min(3).max(12)
        })
      ]
    }),

    // Testimonials Section Images
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({
          name: 'clientAvatars',
          title: 'Client Avatar Images',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'clientName',
                title: 'Client Name',
                type: 'string',
                description: 'For reference and organization',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'avatar',
                title: 'Client Avatar',
                type: 'image',
                options: {hotspot: true},
                validation: (Rule) => Rule.required()
              }
            ],
            preview: {
              select: {
                title: 'clientName',
                media: 'avatar'
              }
            }
          }],
          validation: (Rule) => Rule.min(3).max(15)
        })
      ]
    }),

    // CTA Section Image
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'CTA Background Image',
          type: 'image',
          options: {hotspot: true},
          validation: (Rule) => Rule.required(),
          description: 'Background image for the call-to-action section'
        })
      ]
    }),

    // Additional Brand Images
    defineField({
      name: 'brandAssets',
      title: 'Brand Assets',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Company Logo',
          type: 'image',
          options: {hotspot: true},
          description: 'Main company logo'
        }),
        defineField({
          name: 'favicon',
          title: 'Favicon',
          type: 'image',
          options: {hotspot: true},
          description: 'Website favicon'
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Media Image',
          type: 'image',
          options: {hotspot: true},
          description: 'Image for social media sharing (Open Graph)'
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Images'
      }
    }
  }
})
