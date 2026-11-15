import { useState } from 'react';
import { PORTFOLIO_WORKS, type WorkItem } from '../data/works';
import { StudioImage } from '../components/StudioImage';
import { Lightbox } from '../components/Lightbox';

export function WorksSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openItem = (item: WorkItem) => {
    const idx = PORTFOLIO_WORKS.findIndex((w) => w.id === item.id);
    if (idx !== -1) setActiveIndex(idx);
  };

  const desktopCols: [WorkItem[], WorkItem[], WorkItem[]] = [
    PORTFOLIO_WORKS.filter((w) => w.desktopCol === 1),
    PORTFOLIO_WORKS.filter((w) => w.desktopCol === 2),
    PORTFOLIO_WORKS.filter((w) => w.desktopCol === 3),
  ];

  const mobileCols: [WorkItem[], WorkItem[]] = [
    PORTFOLIO_WORKS.filter((w) => w.mobileCol === 1),
    PORTFOLIO_WORKS.filter((w) => w.mobileCol === 2),
  ];

  const renderTile = (item: WorkItem, heightClass: string) => (
    <button
      key={item.id}
      type="button"
      onClick={() => openItem(item)}
      aria-label={`View ${item.title} in lightbox`}
      className={`group relative w-full ${heightClass} rounded-[16px] overflow-hidden bg-[#efe8df] cursor-zoom-in block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]`}
    >
      <StudioImage
        src={item.image}
        alt={item.title}
        fallbackTitle={item.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </button>
  );

  return (
    <section id="works" className="bg-[#f8f5ef] py-20">
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-12">
        <div className="max-w-[640px] mx-auto text-center space-y-4">
          <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.5] text-[#5e514b]">
            OUR WORKS
          </p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.035em] text-[#251d1b]">
            Find your next inspiration.
          </h2>
          <p className="text-[16px] leading-[1.65] tracking-[-0.02em] text-[#5e514b]">
            A collection of colour, texture, and carefully finished details.
          </p>
        </div>

        {/* Desktop 3-Column Masonry matching live NAILA reference */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-start">
          {desktopCols.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {col.map((item) => renderTile(item, item.desktopHeightClass))}
            </div>
          ))}
        </div>

        {/* Tablet & Mobile 2-Column Masonry matching live NAILA reference */}
        <div className="grid lg:hidden grid-cols-2 gap-4 items-start">
          {mobileCols.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {col.map((item) => renderTile(item, item.mobileHeightClass))}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        items={PORTFOLIO_WORKS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((prev) =>
            prev === null ? null : (prev - 1 + PORTFOLIO_WORKS.length) % PORTFOLIO_WORKS.length,
          )
        }
        onNext={() =>
          setActiveIndex((prev) =>
            prev === null ? null : (prev + 1) % PORTFOLIO_WORKS.length,
          )
        }
      />
    </section>
  );
}
