import { Leaf, Sparkles, Star } from 'lucide-react';
import { WHY_CHOOSE_US_BLOCKS } from '../data/studio';
import { StudioImage } from '../components/StudioImage';

const BLOCK_ICONS = [Sparkles, Star, Leaf];

export function WhyChooseUsSection() {
  return (
    <section id="about" className="bg-[#efe8df] py-20">
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-16">
        <div className="max-w-[640px] mx-auto text-center space-y-4">
          <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.5] text-[#5e514b]">
            WHY CHOOSE US
          </p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.035em] text-[#251d1b]">
            A different kind of nail experience.
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {WHY_CHOOSE_US_BLOCKS.map((block, index) => {
            const Icon = BLOCK_ICONS[index] ?? Sparkles;
            return (
              <div
                key={block.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    block.reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-3">
                    <Icon
                      className="w-6 h-6 text-[#644e43]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-[24px] md:text-[30px] font-medium leading-[1.2] tracking-[-0.025em] text-[#251d1b]">
                      {block.title}
                    </h3>
                    <p className="text-[16px] leading-[1.65] tracking-[-0.02em] text-[#5e514b]">
                      {block.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-[16px] leading-[1.65] tracking-[-0.02em] text-[#5e514b]">
                    {block.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Editorial Photograph */}
                <div
                  className={`lg:col-span-6 ${block.reverse ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="aspect-[1600/1473] w-full rounded-[16px] overflow-hidden bg-[#e6dbcf]">
                    <StudioImage
                      src={block.image}
                      alt={block.imageAlt}
                      fallbackTitle={block.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
