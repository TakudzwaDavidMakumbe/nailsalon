import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { WorkItem } from '../data/works';
import { StudioImage } from './StudioImage';
import { StudioButton } from './Button';

interface LightboxProps {
  items: WorkItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ items, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const activeItem = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!activeItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Nail portfolio preview: ${activeItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#251d1b]/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[960px] bg-[#f8f5ef] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Control */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#f8f5ef]/90 text-[#251d1b] hover:bg-[#efe8df] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo */}
        <div className="md:col-span-7 bg-[#efe8df] flex items-center justify-center max-h-[65vh] md:max-h-[82vh] overflow-hidden">
          <StudioImage
            src={activeItem.image}
            alt={activeItem.title}
            fallbackTitle={activeItem.title}
            priority
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>

        {/* Details & Navigation */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-4 pt-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              {activeItem.category} · {(activeIndex ?? 0) + 1} / {items.length}
            </p>
            <h3 className="font-serif text-[28px] sm:text-[32px] font-medium leading-[1.15] tracking-[-0.025em] text-[#251d1b]">
              {activeItem.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-[#544a45]">
              {activeItem.description}
            </p>
          </div>

          <div className="space-y-6">
            <StudioButton
              to={`/book-appointment?inspiration=${encodeURIComponent(activeItem.title)}`}
              onClick={onClose}
              className="w-full"
            >
              Request this look
            </StudioButton>

            <div className="flex items-center justify-between pt-4 border-t border-[#e6dbcf]">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous look"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] text-[13px] font-medium text-[#251d1b] hover:bg-[#efe8df] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={onNext}
                aria-label="Next look"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] text-[13px] font-medium text-[#251d1b] hover:bg-[#efe8df] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
