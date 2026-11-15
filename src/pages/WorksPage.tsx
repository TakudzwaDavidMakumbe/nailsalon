import { useMemo, useState } from 'react';
import { DocumentMeta } from '../components/DocumentMeta';
import { PORTFOLIO_WORKS, WORK_CATEGORIES, type WorkCategory } from '../data/works';
import { StudioImage } from '../components/StudioImage';
import { Lightbox } from '../components/Lightbox';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredWorks = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_WORKS;
    return PORTFOLIO_WORKS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <DocumentMeta
        title="Our Works — Naila Nail Art Portfolio"
        description="Browse Naila's editorial collection of nude manicures, sheer blush finishes, micro French tips, glossy gels, and bespoke nail art."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-12">
          <div className="max-w-[660px] space-y-4">
            <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              OUR WORKS
            </p>
            <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[64px] font-medium leading-[1.06] tracking-[-0.04em] text-[#251d1b]">
              Find your next inspiration.
            </h1>
            <p className="text-[16px] leading-[1.65] text-[#544a45]">
              A curated collection of colour, texture, and carefully finished details. Select any
              photograph to inspect the finish up close or request a similar direction for your
              visit.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter portfolio works by category"
            className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#e6dbcf]"
          >
            {WORK_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`px-4 py-2 rounded-[6px] text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43] ${
                    active
                      ? 'bg-[#644e43] text-[#f8f5ef]'
                      : 'bg-transparent text-[#544a45] hover:bg-[#efe8df] hover:text-[#251d1b]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Editorial Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredWorks.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Inspect ${item.title}`}
                className="group relative aspect-[3/4] w-full rounded-[16px] overflow-hidden bg-[#efe8df] cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
              >
                <StudioImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#251d1b]/70 via-[#251d1b]/25 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#f8f5ef]/85">
                    {item.category}
                  </p>
                  <p className="font-serif text-[20px] text-[#f8f5ef] leading-tight mt-0.5">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={filteredWorks}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((prev) =>
            prev === null ? null : (prev - 1 + filteredWorks.length) % filteredWorks.length,
          )
        }
        onNext={() =>
          setActiveIndex((prev) =>
            prev === null ? null : (prev + 1) % filteredWorks.length,
          )
        }
      />

      <FinalCtaSection />
    </>
  );
}
