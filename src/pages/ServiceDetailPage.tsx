import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug, NAIL_SERVICES } from '../data/services';
import { DocumentMeta } from '../components/DocumentMeta';
import { StudioImage } from '../components/StudioImage';
import { StudioButton } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const related = NAIL_SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <DocumentMeta
        title={`${service.title} — Naila Nail Studio`}
        description={`${service.shortDescription} Explore what is included, appointment preparation, and aftercare guidance at Naila.`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          provider: {
            '@type': 'BeautySalon',
            name: 'Naila',
          },
        }}
      />

      <article className="bg-[#f8f5ef] pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8 lg:px-10 space-y-20 lg:space-y-24">
          {/* Primary Service Editorial Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Full-height Portrait Image */}
            <div className="w-full h-[460px] sm:h-[580px] lg:h-full">
              <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#efe8df]">
                <StudioImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackTitle={service.title}
                  priority
                  className="w-full h-full lg:absolute lg:inset-0 object-cover"
                />
              </div>
            </div>

            {/* Right Column: Title, Intro, Hairline Divider, Guidance Sections, CTA, Back Link */}
            <div className="flex flex-col justify-start">
              <h1 className="font-serif text-[44px] sm:text-[52px] lg:text-[56px] font-medium leading-[1.08] tracking-[-0.035em] text-[#251d1b]">
                {service.title}
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] tracking-[-0.015em] text-[#544a45]">
                {service.shortDescription}
              </p>

              <hr className="my-7 border-0 border-t border-[#baa99c]/70" />

              <div className="space-y-6">
                {service.sections.map((section) => (
                  <section key={section.heading} className="space-y-2">
                    <h2 className="font-serif text-[26px] sm:text-[28px] lg:text-[30px] font-medium leading-[1.2] tracking-[-0.025em] text-[#251d1b]">
                      {section.heading}
                    </h2>
                    <p className="text-[15px] leading-[1.65] tracking-[-0.015em] text-[#544a45]">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-8">
                <StudioButton
                  to={`/book-appointment?service=${encodeURIComponent(service.slug)}`}
                  className="px-6 py-3"
                >
                  Enquire about this service
                </StudioButton>
              </div>

              <div className="mt-6">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-[14px] font-normal tracking-[-0.015em] text-[#251d1b] hover:text-[#644e43] transition-colors"
                >
                  <span aria-hidden="true">←</span>
                  <span>Back to all services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Service Inclusions & Recommended Finishes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-[#e6dbcf]">
            <div className="bg-[#efe8df] rounded-[16px] p-6 sm:p-8 space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
                WHAT IS INCLUDED
              </p>
              <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#544a45]">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="text-[#644e43]">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#efe8df] rounded-[16px] p-6 sm:p-8 space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
                RECOMMENDED FINISHES
              </p>
              <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#544a45]">
                {service.recommendedFinishes.map((finish) => (
                  <li key={finish} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="text-[#644e43]">
                      ·
                    </span>
                    <span>{finish}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Services */}
          <div className="pt-14 border-t border-[#e6dbcf] space-y-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-[30px] sm:text-[36px] font-medium tracking-[-0.03em] text-[#251d1b]">
                Other studio services
              </h2>
              <Link
                to="/services"
                className="text-[14px] font-medium text-[#251d1b] hover:text-[#644e43] underline underline-offset-4"
              >
                All services →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
