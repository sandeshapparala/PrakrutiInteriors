import { sendContactFormEmails } from '@/lib/email'

// Test email function - you can call this to test your email setup
export async function testEmailConfiguration() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 98765 43210',
    projectType: 'Residential Interior',
    message: 'This is a test message to verify email configuration.'
  }

  try {
    const results = await sendContactFormEmails(testData)
    console.log('Email test results:', results)
    return results
  } catch (error) {
    console.error('Email test failed:', error)
    return { success: false, error }
  }
}


