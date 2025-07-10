// Migration script to add testimonials to Sanity
import { writeClient as client } from '../src/sanity/lib/client'

const testimonialsData = [
  {
    clientName: "Aditya Unnam",
    projectType: "Living Room Redesign",
    testimonialText: "I had the pleasure of working with this team for my living room redesign. They listened carefully to my ideas and combined them with their own expertise. The result? A stunning, functional space with beautiful attention to detail. Worth every penny!",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Karanam Shivani",
    projectType: "Living Room Design",
    testimonialText: "I recently got my living room designed and I'm so happy with the results! The project was completed on time and the team was extremely professional and easy to work with. Highly recommend!",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Mandali Phani",
    projectType: "Interior Finishing",
    testimonialText: "They delivered a high-gloss acrylic finish with hand-finished seamless edges—better than factory-made work. I'm fully satisfied with the craftsmanship and detail.",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Venu Murala",
    projectType: "Apartment Interiors",
    testimonialText: "Getting our apartment interiors done by Prakruti Interiors was one of the best decisions. They offer top-quality materials and designs at prices unmatched in AP and Telangana.",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Dontam Vasanthi",
    projectType: "Complete Interior",
    testimonialText: "I'm delighted with the results. From consultation to final execution, their professionalism, creativity, and commitment were top-notch. Highly satisfied!",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Srujana Vejju",
    projectType: "WPC & Acrylic Laminates",
    testimonialText: "Clean workmanship with WPC and acrylic laminates. They completed the project responsibly and were very friendly throughout. I'd gladly recommend them to friends!",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Percy Yalamarthi",
    projectType: "Dream House",
    testimonialText: "A dream home needs the right interior team—and Prakruti Interiors delivered. So many design choices and exceptional work. They brought my vision to life!",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Vamshi Kanagala",
    projectType: "Kitchen Renovation",
    testimonialText: "Got our kitchen renovated—amazing work at a very reasonable price. We're fully satisfied with the output.",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Prasannanjali Desu",
    projectType: "Complete Project",
    testimonialText: "Very cooperative staff and owners. They took complete responsibility of the site and delivered top-quality work without compromise.",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Krishna Kumari P",
    projectType: "Design Implementation",
    testimonialText: "Excellent work—they turned my design imagination into reality. Truly thankful to Prakruti Interiors!",
    rating: 5,
    isActive: true
  }
];

// Function to create testimonials in Sanity
async function createTestimonials() {
  try {
    console.log('Starting testimonials migration...');
    
    for (let i = 0; i < testimonialsData.length; i++) {
      const testimonial = testimonialsData[i];
      // Add different timestamps so newest appear first (Krishna Kumari P will be newest)
      const timestamp = new Date();
      timestamp.setMinutes(timestamp.getMinutes() + i);
      
      const doc = {
        _type: 'testimonial',
        ...testimonial,
        dateAdded: timestamp.toISOString()
      };
      
      const result = await client.create(doc);
      console.log(`✅ Created testimonial for ${testimonial.clientName} (ID: ${result._id})`);
    }
    
    console.log('🎉 All testimonials created successfully!');
    console.log('📝 Note: Krishna Kumari P will appear first (newest), Aditya Unnam will appear last (oldest)');
  } catch (error) {
    console.error('❌ Error creating testimonials:', error);
    console.error('Make sure SANITY_API_WRITE_TOKEN is set in your .env.local file');
  }
}

// Run the migration
createTestimonials();
