import HeroSection from '@/components/ui/hero-section';
import WhoWeAreSection from '@/components/ui/who-we-are-section';
import ServicesSection from '@/components/ui/services-section';
import InteriorExpertiseSection from '@/components/ui/interior-expertise-section';
import ProjectsSection from '@/components/ui/projects-section';
import TestimonialsSection from '@/components/ui/testimonials-section';
import CTASection from '@/components/ui/cta-section';
import Footer from '@/components/ui/footer';
import { getFeaturedProjects } from '@/sanity/lib/projects';
import { getHomePageImages } from '@/sanity/lib/homePageImages';

export default async function Home() {
  // Fetch both featured projects and homepage images
  const [featuredProjects, homePageData] = await Promise.all([
    getFeaturedProjects(),
    getHomePageImages()
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Now with Sanity images */}
      <div id="home">
        <HeroSection homePageData={homePageData} />
      </div>

      {/* Who We Are Section */}
      <div id="about">
        <WhoWeAreSection />
      </div>

      {/* Services Section - Now with Sanity images */}
      <div id="services">
        <ServicesSection homePageData={homePageData} />
      </div>

      {/* Interior Expertise Section - Now with Sanity images */}
      <div id="expertise">
        <InteriorExpertiseSection homePageData={homePageData} />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection projects={featuredProjects} />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* CTA Section - Now with Sanity images */}
      <div id="contact">
        <CTASection homePageData={homePageData} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
 