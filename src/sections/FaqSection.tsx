import { FAQ_ITEMS } from '../data/faqs';
import { FaqAccordion } from '../components/FaqAccordion';

export function FaqSection() {
  const featuredFaqs = FAQ_ITEMS.filter((item) => item.featuredOnHome);

  return (
    <section className="bg-[#efe8df] py-20">
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 space-y-12">
        <div className="max-w-[640px] mx-auto text-center space-y-4">
          <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.5] text-[#251d1b]">
            A FEW GOOD QUESTIONS
          </p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.035em] text-[#251d1b]">
            Before your appointment.
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          <FaqAccordion items={featuredFaqs} />
        </div>
      </div>
    </section>
  );
}
