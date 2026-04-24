import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryCards } from '@/components/CategoryCards';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { MaterialShowcase } from '@/components/MaterialShowcase';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { Testimonials } from '@/components/Testimonials';
import { StatsCounter } from '@/components/StatsCounter';
import { GalleryFeed } from '@/components/GalleryFeed';
import { CTAConsultation } from '@/components/CTAConsultation';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main>
        <Hero />
        <CategoryCards />
        <FeaturedProducts />
        <WhyChooseUs />
        <MaterialShowcase />
        <ProcessTimeline />
        <Testimonials />
        <StatsCounter />
        <GalleryFeed />
        <CTAConsultation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
