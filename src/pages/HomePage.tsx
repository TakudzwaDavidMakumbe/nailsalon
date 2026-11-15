import { DocumentMeta } from '../components/DocumentMeta';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection';
import { WorksSection } from '../sections/WorksSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { FaqSection } from '../sections/FaqSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export function HomePage() {
  return (
    <>
      <DocumentMeta
        title="Naila — Premium Personal Nail Studio"
        description="Tailored nail care, refined techniques, and a calm studio space. Explore Naila manicures, pedicures, gel polish, nail art, and extensions."
      />
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
