import { useEffect, useId, useState, type KeyboardEvent, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ShowcaseSlide } from '../data/showcaseSlides';
import type { Language, TranslationContent } from '../data/translations';
import { DeviceScreen } from './DeviceScreens';

interface DeviceCarouselProps {
  id: string;
  sectionNumber: string;
  title: string;
  carouselAriaLabel: string;
  slides: ShowcaseSlide[];
  language: Language;
  t: TranslationContent;
}

export function DeviceCarousel({
  id,
  sectionNumber,
  title,
  carouselAriaLabel,
  slides,
  language,
  t,
}: DeviceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const headingId = useId();

  const total = slides.length;
  const currentSlide = slides[activeIndex] ?? slides[0];
  const currentCopy = currentSlide.copy[language];

  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, total]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = endX - touchStartX;
    if (Math.abs(delta) > 48) {
      if (delta > 0) {
        goPrev();
      } else {
        goNext();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 border-t border-zinc-200 py-16 sm:py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              id={headingId}
              className="heading-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100"
            >
              <span className="font-mono-tabular mr-2.5 text-lg font-medium text-blue-700 dark:text-blue-400">
                {sectionNumber}
              </span>
              {title}
            </h2>
          </div>

          {/* Controls: Counter + Prev/Next */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
            className="flex shrink-0 items-center gap-3"
          >
            <span
              className="font-mono-tabular mr-1 text-sm text-zinc-500 dark:text-zinc-400"
              aria-hidden="true"
            >
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={goPrev}
              aria-label={t.a11y.previousSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:focus-visible:outline-blue-400"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t.a11y.nextSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:focus-visible:outline-blue-400"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Accessible Carousel Region */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={carouselAriaLabel}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:p-8 lg:p-10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus-visible:outline-blue-400"
        >
          {/* Live Announcement for Screen Readers */}
          <div className="sr-only" aria-live={isPaused ? 'polite' : 'off'} aria-atomic="true">
            {t.a11y.slideAnnouncement(activeIndex + 1, total, currentCopy.title)}
          </div>

          {/* Viewport Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-editorial"
              style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
            >
              {slides.map((slide, idx) => {
                const isCurrent = idx === activeIndex;
                const slideCopy = slide.copy[language];
                return (
                  <div
                    key={slide.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} / ${total}: ${slideCopy.title}`}
                    aria-hidden={!isCurrent}
                    className="w-full shrink-0 px-1"
                  >
                    <div className="relative flex flex-col items-center">
                      <DeviceScreen slide={slide} language={language} priority={idx === 0} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Navigation Dots */}
          <div className="mt-8 hidden items-center justify-center border-t border-zinc-200/80 pt-5 md:flex dark:border-zinc-800">
            <div className="flex items-center gap-2" role="group" aria-label={carouselAriaLabel}>
              {slides.map((slide, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={t.a11y.goToSlide(idx + 1, total)}
                    aria-current={active ? 'true' : undefined}
                    className="flex h-10 min-w-[28px] items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-200 ${
                        active
                          ? 'w-7 bg-blue-700 dark:bg-blue-400'
                          : 'w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-500'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
