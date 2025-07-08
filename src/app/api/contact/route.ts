import { NextRequest, NextResponse } from 'next/server'
import { submitContactForm, type ContactFormData } from '@/sanity/lib/contactSubmissions'
import { sendContactFormEmails } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, projectType } = body
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, and projectType are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate project type
    const validProjectTypes = [
      'Residential Interior',
      'Commercial Interior', 
      'Office Design',
      'Restaurant Design',
      'Retail Space',
      'Complete Home Renovation',
      'Room Renovation',
      'Consultation Only'
    ]
    if (!validProjectTypes.includes(projectType)) {
      return NextResponse.json(
        { success: false, error: 'Invalid project type' },
        { status: 400 }
      )
    }

    const formData: ContactFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: body.phone?.trim() || '',
      projectType,
      message: body.message?.trim() || '',
    }

    const result = await submitContactForm(formData)

    if (result.success) {
      // Send email notifications
      try {
        const emailResults = await sendContactFormEmails(formData)
        console.log('Email results:', emailResults)
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the entire request if email fails
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        submissionId: result.data?._id 
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to submit form' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
