import { Metadata } from 'next'
import ContactContainer from '@/components/ui/contact-container'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Contact Us - Prakruti Interiors',
  description: 'Get in touch with Prakruti Interiors for your interior design needs. We create eco-friendly, spiritual spaces with fibre wood interiors.',
  keywords: ['contact interior designer', 'interior design consultation', 'prakruti interiors contact', 'eco-friendly interior design', 'fibre wood interiors'],
  openGraph: {
    title: 'Contact Us - Prakruti Interiors',
    description: 'Ready to transform your space? Contact Prakruti Interiors for innovative, eco-friendly interior design solutions.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        <ContactContainer />
      </main>
      
      <Footer />
    </div>
  )
}
