import { useEffect, useState } from 'react';
import { DeviceCarousel } from './components/DeviceCarousel';
import { Footer } from './components/Footer';
import { LandingSkeleton } from './components/LandingSkeleton';
import { Navbar, type SectionId } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import {
  getDesktopSlides,
  getMobileSlides,
  getTabletSlides,
} from './data/showcaseSlides';
import { translations, type Language } from './data/translations';

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('cadre-lang');
    if (saved === 'en' || saved === 'fr') return saved;
    if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('fr')) {
      return 'fr';
    }
  } catch {
    // Ignore storage errors
  }
  return 'en';
}

function getInitialDarkMode(): boolean {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark');
  }
  return false;
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [isDark, setIsDark] = useState<boolean>(getInitialDarkMode);
  const [assetsReady, setAssetsReady] = useState<boolean>(false);
  const [shimmerDone, setShimmerDone] = useState<boolean>(false);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<SectionId>('service');

  const t = translations[language];
  const mobileSlides = getMobileSlides(language);
  const tabletSlides = getTabletSlides(language);
  const desktopSlides = getDesktopSlides(language);
  const isInitialLoading = !(assetsReady && shimmerDone);

  // Preload lead gallery asset & fonts in parallel with skeleton animation (with 1.5s safety fallback)
  useEffect(() => {
    let active = true;

    const preloadLeadImage = new Promise<void>((resolve) => {
      const leadSrc = t.images.mobile.mob01;
      if (!leadSrc) {
        resolve();
        return;
      }
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = leadSrc;
    });

    const fontsReady =
      typeof document !== 'undefined' && document.fonts?.ready
        ? document.fonts.ready.then(() => undefined).catch(() => undefined)
        : Promise.resolve();

    const safetyTimer = window.setTimeout(() => {
      if (active) {
        setAssetsReady(true);
        setShimmerDone(true);
      }
    }, 1500);

    Promise.all([preloadLeadImage, fontsReady]).then(() => {
      if (active) setAssetsReady(true);
    });

    return () => {
      active = false;
      window.clearTimeout(safetyTimer);
    };
  }, []);

  // Unmount skeleton overlay cleanly after its 400ms fade-out completes
  useEffect(() => {
    if (isInitialLoading) return;
    const timer = window.setTimeout(() => {
      setShowSkeleton(false);
    }, 420);
    return () => window.clearTimeout(timer);
  }, [isInitialLoading]);

  // Sync HTML lang, SEO title, and meta description dynamically for search engines & screen readers
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.seo.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.seo.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', t.seo.description);
    }

    try {
      localStorage.setItem('cadre-lang', language);
    } catch {
      // Ignore storage errors
    }
  }, [language, t.seo.description, t.seo.title]);

  // Sync dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('cadre-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors
    }
  }, [isDark]);

  // Track the currently visible section for Navbar highlighting once content mounts
  useEffect(() => {
    if (isInitialLoading) return;

    const sectionIds: SectionId[] = ['service', 'mobile', 'tablet', 'desktop', 'contact'];
    let rafId: number | null = null;

    const updateActiveSection = () => {
      rafId = null;
      const scrollY = window.scrollY;

      if (scrollY < 40) {
        setActiveSection('service');
        return;
      }

      const nearBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 24;
      if (nearBottom) {
        setActiveSection('contact');
        return;
      }

      const triggerOffset = 160;
      let current: SectionId = 'service';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= triggerOffset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const onScrollOrResize = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [isInitialLoading]);

  return (
    <>
      {showSkeleton ? (
        <LandingSkeleton
          loadingLabel={t.a11y.loadingPage}
          isExiting={!isInitialLoading}
          onAnimationComplete={() => setShimmerDone(true)}
        />
      ) : null}

      {!isInitialLoading ? (
        <div className="animate-page-reveal min-h-screen bg-neutral-50 text-zinc-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-blue-700 focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:outline-none dark:focus:bg-blue-600"
      >
        {t.a11y.skipToContent}
      </a>

      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        t={t}
      />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Service Description / Hero Section */}
        <section
          id="service"
          aria-labelledby="service-heading"
          className="scroll-mt-20 py-14 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
              <h1
                id="service-heading"
                className="heading-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100"
              >
                {t.hero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {t.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mobile Version Carousel */}
        <DeviceCarousel
          id="mobile"
          sectionNumber={t.sections.mobile.number}
          title={t.sections.mobile.title}
          carouselAriaLabel={t.sections.mobile.carouselAria}
          slides={mobileSlides}
          language={language}
          t={t}
        />

        {/* Section 3: Tablet Version Carousel */}
        <DeviceCarousel
          id="tablet"
          sectionNumber={t.sections.tablet.number}
          title={t.sections.tablet.title}
          carouselAriaLabel={t.sections.tablet.carouselAria}
          slides={tabletSlides}
          language={language}
          t={t}
        />

        {/* Section 4: Desktop Version Carousel */}
        <DeviceCarousel
          id="desktop"
          sectionNumber={t.sections.desktop.number}
          title={t.sections.desktop.title}
          carouselAriaLabel={t.sections.desktop.carouselAria}
          slides={desktopSlides}
          language={language}
          t={t}
        />

        {/* Section 5: Pricing Table */}
        <PricingSection t={t} />
      </main>

      <Footer t={t} />
        </div>
      ) : null}
    </>
  );
}
