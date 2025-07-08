import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  projectType: string
  message?: string
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Email template for new submission notification
const createNotificationEmailTemplate = (data: ContactFormData) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `🏠 New Contact Form Submission - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🏠 New Contact Form Submission</h1>
          <p style="color: #fed7aa; margin: 5px 0 0 0;">Prakruti Interiors Website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 12px;">
              <strong style="color: #374151;">👤 Name:</strong>
              <span style="color: #1f2937; margin-left: 10px;">${data.name}</span>
            </div>
            <div style="margin-bottom: 12px;">
              <strong style="color: #374151;">📧 Email:</strong>
              <span style="color: #1f2937; margin-left: 10px;"><a href="mailto:${data.email}" style="color: #f97316; text-decoration: none;">${data.email}</a></span>
            </div>
            ${data.phone ? `
            <div style="margin-bottom: 12px;">
              <strong style="color: #374151;">📱 Phone:</strong>
              <span style="color: #1f2937; margin-left: 10px;"><a href="tel:${data.phone}" style="color: #f97316; text-decoration: none;">${data.phone}</a></span>
            </div>
            ` : ''}
            <div style="margin-bottom: 12px;">
              <strong style="color: #374151;">🏗️ Project Type:</strong>
              <span style="color: #1f2937; background: #fef3e2; padding: 4px 8px; border-radius: 6px; font-size: 14px; margin-left: 10px;">${data.projectType}</span>
            </div>
            <div style="margin-bottom: 12px;">
              <strong style="color: #374151;">📅 Submitted:</strong>
              <span style="color: #1f2937; margin-left: 10px;">${currentDate}</span>
            </div>
          </div>

          ${data.message ? `
          <h3 style="color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">💬 Message</h3>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #f97316; margin-bottom: 20px;">
            <p style="color: #374151; margin: 0; line-height: 1.6;">${data.message}</p>
          </div>
          ` : ''}

          <div style="background: #fef3e2; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px;">
            <h3 style="color: #f97316; margin: 0 0 10px 0;">Quick Actions</h3>
            <a href="mailto:${data.email}" style="display: inline-block; background: #f97316; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin: 5px;">Reply to Customer</a>
            ${data.phone ? `<a href="tel:${data.phone}" style="display: inline-block; background: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin: 5px;">Call Customer</a>` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              This email was sent from your Prakruti Interiors website contact form.
            </p>
          </div>
        </div>
      </div>
    `
  }
}

// Email template for customer confirmation
const createConfirmationEmailTemplate = (data: ContactFormData) => {
  return {
    from: process.env.SMTP_FROM,
    to: data.email,
    subject: `Thank you for contacting Prakruti Interiors, ${data.name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${data.name}!</h1>
          <p style="color: #fed7aa; margin: 5px 0 0 0;">We've received your inquiry</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1f2937; margin-top: 0;">Your Inquiry Details</h2>
          
          <div style="background: #fef3e2; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #374151; margin: 0 0 10px 0;"><strong>Project Type:</strong> ${data.projectType}</p>
            ${data.phone ? `<p style="color: #374151; margin: 0 0 10px 0;"><strong>Phone:</strong> ${data.phone}</p>` : ''}
            ${data.message ? `<p style="color: #374151; margin: 0;"><strong>Message:</strong> ${data.message}</p>` : ''}
          </div>
          
          <h3 style="color: #f97316;">What happens next?</h3>
          <ul style="color: #374151; line-height: 1.6;">
            <li>Our team will review your inquiry within 24 hours</li>
            <li>We'll contact you to discuss your project requirements</li>
            <li>If needed, we'll schedule a consultation at your convenience</li>
            <li>We'll provide you with a customized proposal</li>
          </ul>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin: 20px 0;">
            <h4 style="color: #059669; margin: 0 0 10px 0;">Need immediate assistance?</h4>
            <p style="color: #374151; margin: 0;">
              Call us at <a href="tel:+918886148866" style="color: #059669; text-decoration: none;">+91 88861 48866</a><br>
              Or email us at <a href="mailto:prakruti.salesteam@gmail.com" style="color: #059669; text-decoration: none;">prakruti.salesteam@gmail.com</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Thank you for choosing Prakruti Interiors for your interior design needs!
            </p>
          </div>
        </div>
      </div>
    `
  }
}

// Send notification email to admin
export async function sendNotificationEmail(data: ContactFormData) {
  try {
    const mailOptions = createNotificationEmailTemplate(data)
    const result = await transporter.sendMail(mailOptions)
    console.log('Notification email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Error sending notification email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Send confirmation email to customer
export async function sendConfirmationEmail(data: ContactFormData) {
  try {
    const mailOptions = createConfirmationEmailTemplate(data)
    const result = await transporter.sendMail(mailOptions)
    console.log('Confirmation email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Send both emails
export async function sendContactFormEmails(data: ContactFormData) {
  const results = await Promise.allSettled([
    sendNotificationEmail(data),
    sendConfirmationEmail(data)
  ])

  return {
    notification: results[0].status === 'fulfilled' ? results[0].value : { success: false, error: 'Failed to send notification' },
    confirmation: results[1].status === 'fulfilled' ? results[1].value : { success: false, error: 'Failed to send confirmation' }
  }
}
