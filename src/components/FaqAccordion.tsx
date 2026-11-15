import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FaqItem } from '../data/faqs';

interface FaqAccordionProps {
  items: FaqItem[];
  itemBgClass?: string;
}

export function FaqAccordion({ items, itemBgClass = 'bg-[#f8f5ef]' }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(items[0] ? [items[0].id] : []);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div
            key={item.id}
            className={`${itemBgClass} rounded-[12px] border border-[#e6dbcf] transition-colors duration-200`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left rounded-[12px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
            >
              <span className="text-[16px] font-medium leading-[1.45] tracking-[-0.01em] text-[#251d1b]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`shrink-0 w-7 h-7 flex items-center justify-center text-[#544a45] transition-transform duration-300 ${
                  isOpen ? 'rotate-45 text-[#251d1b]' : 'rotate-0'
                }`}
              >
                <Plus className="w-4 h-4" strokeWidth={1.75} />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pt-4 text-[15px] leading-[1.65] text-[#544a45] border-t border-[#e6dbcf]/60">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
