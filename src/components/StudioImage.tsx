import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function StudioImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  priority = false,
  fallbackTitle,
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#efe8df] via-[#e6dbcf] to-[#f8f5ef] text-[#5e514b] p-6 text-center"
      >
        <Sparkles className="w-5 h-5 mb-2 text-[#793d43]/70" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-serif text-lg text-[#251d1b]">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
