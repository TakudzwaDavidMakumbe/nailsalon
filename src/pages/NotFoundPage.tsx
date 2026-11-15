import { DocumentMeta } from '../components/DocumentMeta';
import { StudioButton } from '../components/Button';

export function NotFoundPage() {
  return (
    <>
      <DocumentMeta
        title="Page Not Found — Naila Nail Studio"
        description="The page you are looking for could not be found. Return to Naila home or explore our nail care services."
      />

      <section className="bg-[#f8f5ef] py-28 lg:py-36">
        <div className="max-w-[640px] mx-auto px-6 text-center space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
            404 · PAGE NOT FOUND
          </p>
          <h1 className="font-serif text-[42px] sm:text-[54px] font-medium leading-[1.08] tracking-[-0.04em] text-[#251d1b]">
            This page isn’t here.
          </h1>
          <p className="text-[16px] leading-[1.65] text-[#544a45]">
            Return to the studio homepage or browse our nail care services to plan your next visit.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <StudioButton to="/">Return home</StudioButton>
            <StudioButton variant="secondary" to="/services">
              Explore services
            </StudioButton>
          </div>
        </div>
      </section>
    </>
  );
}
