import { NextResponse } from 'next/server'
import { writeClient as client } from '../../../sanity/lib/client'
import nodemailer from 'nodemailer'

// Types
interface TestimonialSubmission {
  clientName: string
  email: string
  phone?: string
  projectType: string
  testimonialText: string
  rating: number
}

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Function to send email notification
async function sendNotificationEmail(testimonial: TestimonialSubmission) {
  const stars = '⭐'.repeat(testimonial.rating)
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #0F7D32; font-size: 24px; margin-bottom: 20px; text-align: center;">
          🎉 New Testimonial Submitted!
        </h1>
        
        <div style="background-color: #fef3e6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #F06A00; font-size: 18px; margin: 0 0 10px 0;">Customer Details</h2>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${testimonial.clientName}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${testimonial.email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${testimonial.phone || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Project Type:</strong> ${testimonial.projectType}</p>
          <p style="margin: 5px 0;"><strong>Rating:</strong> ${stars} (${testimonial.rating}/5)</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #374151; font-size: 16px; margin: 0 0 10px 0;">Testimonial Text:</h3>
          <p style="color: #4B5563; line-height: 1.6; font-style: italic;">
            "${testimonial.testimonialText}"
          </p>
        </div>
        
        <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; border-left: 4px solid #0F7D32;">
          <h4 style="color: #0F7D32; margin: 0 0 10px 0;">Next Steps:</h4>
          <ul style="color: #374151; margin: 0; padding-left: 20px;">
            <li>Review the testimonial in Sanity Studio</li>
            <li>Consider featuring it as a public testimonial</li>
            <li>Send a thank you email to the customer</li>
            <li>Follow up if rating is below 4 stars</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6B7280; font-size: 14px; margin: 0;">
            This email was automatically generated from the Prakruti Interiors website feedback form.
          </p>
        </div>
      </div>
    </div>
  `

  const textContent = `
    New Testimonial Submitted - Prakruti Interiors
    
    Customer: ${testimonial.clientName}
    Email: ${testimonial.email}
    Phone: ${testimonial.phone || 'Not provided'}
    Project: ${testimonial.projectType}
    Rating: ${testimonial.rating}/5 stars
    
    Testimonial:
    "${testimonial.testimonialText}"
    
    Please review this testimonial in Sanity Studio and consider featuring it on the website.
  `

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'contact@prakrutiinteriors.com',
    subject: `🌟 New ${testimonial.rating}-Star Testimonial from ${testimonial.clientName}`,
    text: textContent,
    html: htmlContent,
  }

  await transporter.sendMail(mailOptions)
}

export async function POST(request: Request) {
  try {
    const testimonialData: TestimonialSubmission = await request.json()

    // Validate required fields
    if (!testimonialData.clientName || !testimonialData.email || !testimonialData.projectType || !testimonialData.testimonialText) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create testimonial document in Sanity
    const testimonialDoc = {
      _type: 'testimonial',
      clientName: testimonialData.clientName,
      projectType: testimonialData.projectType,
      testimonialText: testimonialData.testimonialText,
      rating: testimonialData.rating,
      isActive: false, // Set to false by default - admin needs to approve
      dateAdded: new Date().toISOString(),
      // Store additional metadata for admin use
      submissionEmail: testimonialData.email,
      submissionPhone: testimonialData.phone || null,
      needsReview: true
    }

    // Save to Sanity
    const result = await client.create(testimonialDoc)
    console.log(`✅ Testimonial created with ID: ${result._id}`)

    // Send notification email
    try {
      await sendNotificationEmail(testimonialData)
      console.log('✅ Notification email sent to contact@prakrutiinteriors.com')
    } catch (emailError) {
      console.error('❌ Failed to send notification email:', emailError)
      // Don't fail the whole request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Testimonial submitted successfully!',
      testimonialId: result._id
    })

  } catch (error) {
    console.error('Error submitting testimonial:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit testimonial. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
