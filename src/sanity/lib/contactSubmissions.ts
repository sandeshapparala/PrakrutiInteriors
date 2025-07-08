import { writeClient, client } from './client'

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  projectType: string
  message?: string
}

// Submit contact form to Sanity
export async function submitContactForm(formData: ContactFormData) {
  try {
    const submission = {
      _type: 'contactSubmission',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      projectType: formData.projectType,
      message: formData.message || '',
      status: 'new',
      submittedAt: new Date().toISOString(),
    }

    const result = await writeClient.create(submission)
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get all contact submissions (for admin use)
export async function getContactSubmissions(limit: number = 50) {
  try {
    const submissions = await client.fetch(
      `*[_type == "contactSubmission"] | order(submittedAt desc) [0...${limit}] {
        _id,
        name,
        email,
        phone,
        projectType,
        message,
        status,
        submittedAt,
        notes
      }`
    )
    return submissions
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return []
  }
}

// Update contact submission status
export async function updateContactStatus(submissionId: string, status: string, notes?: string) {
  try {
    const updates: { status: string; notes?: string } = { status }
    if (notes !== undefined) {
      updates.notes = notes
    }

    const result = await writeClient.patch(submissionId).set(updates).commit()
    return { success: true, data: result }
  } catch (error) {
    console.error('Error updating contact status:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get contact submission by ID
export async function getContactSubmission(id: string) {
  try {
    const submission = await client.fetch(
      `*[_type == "contactSubmission" && _id == $id][0] {
        _id,
        name,
        email,
        phone,
        projectType,
        message,
        status,
        submittedAt,
        notes
      }`,
      { id }
    )
    return submission
  } catch (error) {
    console.error('Error fetching contact submission:', error)
    return null
  }
}
