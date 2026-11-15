import { DocumentMeta } from '../components/DocumentMeta';
import { STUDIO_MEDIA } from '../data/studio';
import { StudioImage } from '../components/StudioImage';
import { StudioButton } from '../components/Button';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export function AboutPage() {
  return (
    <>
      <DocumentMeta
        title="About — Naila Personal Nail Studio"
        description="Learn about Naila's calm studio philosophy, personal nail-care consultation, skilled technicians, and carefully selected materials."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              ABOUT NAILA
            </p>
            <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[64px] font-medium leading-[1.06] tracking-[-0.04em] text-[#251d1b]">
              Calm rituals for everyday hands.
            </h1>
            <p className="text-[16px] leading-[1.7] text-[#544a45]">
              Naila was shaped around a simple belief: caring for your nails should feel unhurried,
              personal, and quietly restorative. Rather than rushing through steps, every visit is
              built around natural nail health, balanced proportions, and shades you genuinely love
              wearing.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#544a45]">
              Whether you arrive with a clear reference or want to browse subtle neutrals together at
              the desk, your technician takes the time to tailor every detail from cuticle prep to
              final top coat.
            </p>
            <div className="pt-2 flex flex-wrap gap-3.5">
              <StudioButton to="/book-appointment">Book a visit</StudioButton>
              <StudioButton variant="secondary" to="/services">
                Explore services
              </StudioButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-[#efe8df]">
              <StudioImage
                src={STUDIO_MEDIA.whyCalmSpace}
                alt="Calm Naila nail studio seating and natural light interior"
                fallbackTitle="Naila Studio"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <FinalCtaSection />
    </>
  );
}
