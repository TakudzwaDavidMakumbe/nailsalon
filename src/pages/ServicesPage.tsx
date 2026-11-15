import { DocumentMeta } from '../components/DocumentMeta';
import { NAIL_SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { StudioButton } from '../components/Button';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export function ServicesPage() {
  return (
    <>
      <DocumentMeta
        title="Services — Naila Nail Studio"
        description="Explore six tailored nail care services at Naila: manicure, pedicure, gel polish, bespoke nail art, nail extensions, and careful removal."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#e6dbcf]">
            <div className="max-w-[640px] space-y-4">
              <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
                OUR SERVICES
              </p>
              <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[64px] font-medium leading-[1.06] tracking-[-0.04em] text-[#251d1b]">
                Thoughtful nail care, six ways.
              </h1>
              <p className="text-[16px] leading-[1.65] text-[#544a45] max-w-[540px]">
                Every visit begins with a calm consultation around your nail health, preferred
                shape, and colour finish. Select a service below to explore what to expect.
              </p>
            </div>

            <div className="shrink-0">
              <StudioButton to="/book-appointment">Book Appointment</StudioButton>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {NAIL_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
