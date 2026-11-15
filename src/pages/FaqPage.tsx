import { useMemo, useState } from 'react';
import { DocumentMeta } from '../components/DocumentMeta';
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqCategory } from '../data/faqs';
import { FaqAccordion } from '../components/FaqAccordion';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <DocumentMeta
        title="Frequently Asked Questions — Naila Nail Studio"
        description="Answers to common questions about Naila nail services, booking enquiries, nail preparation, aftercare, and rescheduling."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-12">
          <div className="max-w-[660px] space-y-4">
            <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              A FEW GOOD QUESTIONS
            </p>
            <h1 className="font-serif text-[42px] sm:text-[56px] font-medium leading-[1.06] tracking-[-0.04em] text-[#251d1b]">
              Before your appointment.
            </h1>
            <p className="text-[16px] leading-[1.65] text-[#544a45]">
              Everything to know ahead of your visit, from selecting a finish to caring for your
              nails afterwards.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter FAQ by topic"
            className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#e6dbcf]"
          >
            {FAQ_CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
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

          <div className="max-w-[820px]">
            <FaqAccordion items={filteredItems} itemBgClass="bg-[#efe8df]" />
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
