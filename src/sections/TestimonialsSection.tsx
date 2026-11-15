import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { CLIENT_TESTIMONIALS, type Testimonial } from '../data/testimonials';
import { StudioImage } from '../components/StudioImage';

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="bg-[#efe8df] rounded-[10px] p-6 sm:p-7 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex items-center gap-1 text-[#644e43]" aria-label="Five-star illustrative rating">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className="w-3.5 h-3.5 fill-[#644e43] text-[#644e43]"
              aria-hidden="true"
            />
          ))}
        </div>

        <blockquote className="font-serif text-[20px] sm:text-[21px] font-normal leading-[1.45] tracking-[-0.02em] text-[#251d1b]">
          {item.quote}
        </blockquote>
      </div>

      <div className="flex items-center gap-3.5 pt-2">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-[#e6dbcf] shrink-0">
          <StudioImage
            src={item.portrait}
            alt={`Illustrative portrait of ${item.name}`}
            fallbackTitle={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[14px] font-medium tracking-[-0.02em] text-[#251d1b] leading-tight">
            {item.name}
          </p>
          <p className="text-[12px] tracking-[0.02em] text-[#5e514b] leading-tight mt-0.5">
            {item.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [mobileIdx, setMobileIdx] = useState(0);

  const columns: [Testimonial[], Testimonial[], Testimonial[]] = [
    CLIENT_TESTIMONIALS.filter((t) => t.column === 1),
    CLIENT_TESTIMONIALS.filter((t) => t.column === 2),
    CLIENT_TESTIMONIALS.filter((t) => t.column === 3),
  ];

  const prevSlide = () => {
    setMobileIdx((prev) => (prev - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length);
  };

  const nextSlide = () => {
    setMobileIdx((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
  };

  return (
    <section aria-label="Client stories" className="bg-[#f8f5ef] py-20">
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-12">
        <div className="max-w-[680px] mx-auto text-center space-y-4">
          <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.5] text-[#251d1b]">
            CLIENT STORIES
          </p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.035em] text-[#251d1b]">
            A little love for your next visit.
          </h2>
          <p className="text-[16px] leading-[1.65] tracking-[-0.02em] text-[#5e514b]">
            Sample client stories for layout preview · replace portraits and quotes with approved
            customer content before launch.
          </p>
        </div>

        {/* Desktop & Tablet 3-Column Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {col.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Accessible Single-Card Carousel */}
        <div className="md:hidden space-y-5">
          <TestimonialCard item={CLIENT_TESTIMONIALS[mobileIdx]} />

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              {CLIENT_TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMobileIdx(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  aria-current={idx === mobileIdx ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === mobileIdx ? 'w-6 bg-[#644e43]' : 'w-1.5 bg-[#baa99c]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-[6px] border border-[#e6dbcf] bg-[#efe8df] flex items-center justify-center text-[#251d1b] hover:bg-[#e6dbcf] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-[6px] border border-[#e6dbcf] bg-[#efe8df] flex items-center justify-center text-[#251d1b] hover:bg-[#e6dbcf] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
