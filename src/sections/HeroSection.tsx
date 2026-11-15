import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { STUDIO_INFO, STUDIO_MEDIA } from '../data/studio';
import { StudioButton } from '../components/Button';
import { StudioImage } from '../components/StudioImage';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !textBlockRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(textBlockRef.current!.children, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero"
      className="relative w-full h-screen min-h-[640px] flex items-center overflow-hidden bg-[#f8f5ef]"
    >
      {/* Full-bleed Hero Photography */}
      <div className="absolute inset-0">
        <StudioImage
          src={STUDIO_MEDIA.hero}
          alt="Manicured hands with sheer nude-blush polish and delicate botanical nail art resting on cream linen"
          fallbackTitle="Nails, made personal."
          priority
          className="w-full h-full object-cover object-[72%_center] md:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef]/92 via-[#f8f5ef]/70 to-[#f8f5ef]/10 md:from-[#f8f5ef]/85 md:via-[#f8f5ef]/45 md:to-transparent"
        />
      </div>

      {/* Left-aligned 50% Editorial Content matching live NAILA Hero */}
      <div className="relative z-10 w-full max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 pt-24 pb-20">
        <div ref={textBlockRef} className="w-full md:w-1/2 max-w-[540px] space-y-6">
          <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.5] text-[#5e514b]">
            PREMIUM NAIL STUDIO
          </p>

          <h1 className="font-serif text-[44px] sm:text-[58px] lg:text-[72px] font-medium leading-none lg:leading-[72px] tracking-[-0.04em] lg:tracking-[-2.9px] text-[#251d1b]">
            Nails, made personal.
          </h1>

          <p className="text-[16px] leading-[1.65] tracking-[-0.02em] text-[#544a45] max-w-[440px]">
            Tailored nail care, refined techniques, and a calm space just for you.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <StudioButton to="/book-appointment">Book Appointment</StudioButton>
            <StudioButton variant="secondary" onClick={scrollToServices}>
              Our Services
            </StudioButton>
          </div>

          <p className="text-[14px] leading-[1.4] tracking-[-0.02em] text-[#544a45]">
            {STUDIO_INFO.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
