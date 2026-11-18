import { useEffect, useRef, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  priority = false,
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setHasError(false);
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 ${className}`}
      >
        <ImageIcon className="h-6 w-6 opacity-60" aria-hidden="true" />
        {fallbackTitle ? (
          <span className="px-4 text-center text-xs font-medium tracking-tight">{fallbackTitle}</span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-200/70 dark:bg-zinc-800/70">
      <div
        aria-hidden="true"
        className={`skeleton-shimmer pointer-events-none absolute inset-0 bg-zinc-200 transition-opacity duration-300 ease-editorial dark:bg-zinc-800 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-300 ease-editorial ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
