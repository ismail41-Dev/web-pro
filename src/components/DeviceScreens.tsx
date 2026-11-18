import type { ShowcaseSlide } from '../data/showcaseSlides';
import type { Language } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface DeviceScreenProps {
  slide: ShowcaseSlide;
  language: Language;
  priority?: boolean;
}

export function DeviceScreen({ slide, language, priority = false }: DeviceScreenProps) {
  const copy = slide.copy[language];

  if (slide.device === 'mobile') {
    return (
      <div className="mx-auto w-full max-w-[296px] rounded-[2rem] border border-zinc-300 bg-zinc-900 p-2.5 shadow-sm dark:border-zinc-700">
        {/* Minimalist Mobile Speaker Notch */}
        <div className="mb-2 flex justify-center">
          <div className="h-1 w-14 rounded-full bg-zinc-700" aria-hidden="true" />
        </div>

        {/* 9:16 Mobile Screen Viewport */}
        <div className="aspect-[9/16] w-full overflow-hidden rounded-[1.45rem] bg-white dark:bg-zinc-950">
          <ResilientImage
            src={slide.primaryImage}
            alt={copy.alt}
            priority={priority}
            fallbackTitle={copy.screenTitle}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    );
  }

  if (slide.device === 'tablet') {
    return (
      <div className="mx-auto w-full max-w-[680px] rounded-2xl border border-zinc-300 bg-zinc-900 p-3 shadow-sm dark:border-zinc-700">
        {/* 4:3 Tablet Screen Viewport */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white dark:bg-zinc-950">
          <ResilientImage
            src={slide.primaryImage}
            alt={copy.alt}
            priority={priority}
            fallbackTitle={copy.screenTitle}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    );
  }

  // Desktop 16:9 Viewport Frame
  return (
    <div className="mx-auto w-full max-w-[920px] rounded-2xl border border-zinc-300 bg-zinc-900 p-2.5 shadow-sm dark:border-zinc-700">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-white dark:bg-zinc-950">
        <ResilientImage
          src={slide.primaryImage}
          alt={copy.alt}
          priority={priority}
          fallbackTitle={copy.screenTitle}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
