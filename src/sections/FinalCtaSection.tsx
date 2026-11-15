import { STUDIO_MEDIA } from '../data/studio';
import { StudioButton } from '../components/Button';
import { StudioImage } from '../components/StudioImage';

export function FinalCtaSection() {
  return (
    <section className="relative w-full min-h-[460px] lg:min-h-[540px] flex items-center justify-center overflow-hidden bg-[#efe8df]">
      <div className="absolute inset-0">
        <StudioImage
          src={STUDIO_MEDIA.finalCta}
          alt="Manicured hands in soft ivory-blush polish resting gracefully on warm cream silk"
          fallbackTitle="Ready for your next set?"
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#f8f5ef]/78 backdrop-blur-[1px]"
        />
      </div>

      <div className="relative z-10 max-w-[640px] mx-auto px-6 py-20 text-center space-y-6">
        <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#251d1b]">
          BOOK TODAY
        </p>

        <h2 className="font-serif text-[36px] sm:text-[46px] lg:text-[54px] font-medium leading-[1.1] tracking-[-0.035em] text-[#251d1b]">
          Ready for your next set?
        </h2>

        <p className="text-[16px] leading-[1.65] tracking-[-0.015em] text-[#544a45] max-w-[440px] mx-auto">
          Choose your service and share your preferred time with the studio.
        </p>

        <div className="pt-2">
          <StudioButton to="/book-appointment">Book Appointment</StudioButton>
        </div>
      </div>
    </section>
  );
}
