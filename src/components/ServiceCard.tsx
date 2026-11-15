import { Link } from 'react-router-dom';
import type { NailService } from '../data/services';
import { StudioImage } from './StudioImage';

interface ServiceCardProps {
  service: NailService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#644e43] rounded-[16px]"
    >
      <div className="w-full h-[260px] rounded-[16px] overflow-hidden bg-[#e6dbcf]">
        <StudioImage
          src={service.image}
          alt={service.imageAlt}
          fallbackTitle={service.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-3">
        <div className="space-y-1.5">
          <h3 className="font-serif text-[24px] md:text-[30px] font-medium tracking-[-0.025em] leading-[1.2] text-[#251d1b]">
            {service.title}
          </h3>
          <p className="text-[16px] leading-[1.65] tracking-[-0.02em] text-[#544a45]">
            {service.shortDescription}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[14px] font-normal tracking-[-0.02em] text-[#251d1b] group-hover:text-[#644e43] transition-colors">
          <span>Explore service</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
