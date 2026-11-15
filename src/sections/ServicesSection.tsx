import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAIL_SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.children, {
        y: 22,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 84%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-[#efe8df] py-20">
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-12">
        <div className="max-w-[640px] mx-auto text-center space-y-4">
          <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.5] text-[#5e514b]">
            OUR SERVICES
          </p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.035em] text-[#251d1b]">
            What we do.
          </h2>
          <p className="text-[16px] leading-[1.65] tracking-[-0.02em] text-[#544a45]">
            Six ways to care for your nails, each tailored to you.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {NAIL_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
