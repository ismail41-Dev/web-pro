import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { Language, TranslationContent } from '../data/translations';

export type SectionId = 'service' | 'mobile' | 'tablet' | 'desktop' | 'contact';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onToggleDark: () => void;
  activeSection: SectionId;
  onSelectSection?: (id: SectionId) => void;
  t: TranslationContent;
}

export function Navbar({
  language,
  onLanguageChange,
  isDark,
  onToggleDark,
  activeSection,
  onSelectSection,
  t,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const logoSrc = t.nav.logo.trim();
  const showCustomLogo = logoSrc.length > 0 && !logoError;

  useEffect(() => {
    setLogoError(false);
  }, [logoSrc]);

  const navItems: Array<{ id: SectionId; href: string; label: string }> = [
    { id: 'service', href: '#service', label: t.nav.service },
    { id: 'mobile', href: '#mobile', label: t.nav.mobile },
    { id: 'tablet', href: '#tablet', label: t.nav.tablet },
    { id: 'desktop', href: '#desktop', label: t.nav.desktop },
    { id: 'contact', href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: SectionId) => {
    onSelectSection?.(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-neutral-50/90 backdrop-blur-md transition-colors duration-200 dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Brand Logo (custom path from translations.ts or geometric frame mark fallback) */}
        <a
          href="#service"
          onClick={() => handleNavClick('service')}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md py-1 text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:text-zinc-100 dark:focus-visible:outline-blue-400"
        >
          {showCustomLogo ? (
            <img
              src={logoSrc}
              alt=""
              aria-hidden="true"
              onError={() => setLogoError(true)}
              className="h-6 w-6 shrink-0 rounded object-contain transition-transform duration-200 ease-editorial group-hover:scale-95"
            />
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-zinc-900 transition-transform duration-200 ease-editorial group-hover:scale-95 dark:text-zinc-100"
            >
              <rect
                x="2.75"
                y="2.75"
                width="18.5"
                height="18.5"
                rx="2.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="7.25"
                y="7.25"
                width="9.5"
                height="9.5"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line x1="12" y1="2.75" x2="12" y2="7.25" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
          <span className="font-[var(--font-display)] text-lg font-semibold tracking-tight">
            {t.nav.brand}
          </span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav aria-label={t.a11y.primaryNav} className="hidden md:flex md:items-center md:gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`whitespace-nowrap shrink-0 rounded-sm py-1 text-sm underline-offset-8 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 ${
                  isActive
                    ? 'font-semibold text-blue-700 underline decoration-2 dark:text-blue-400'
                    : 'font-medium text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher & Dark Mode Toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label={t.a11y.languageGroup}
            className="inline-flex h-10 items-center rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              aria-label={t.a11y.switchToEnglish}
              className={`h-8 whitespace-nowrap shrink-0 rounded-md px-2.5 text-xs font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 ${
                language === 'en'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('fr')}
              aria-pressed={language === 'fr'}
              aria-label={t.a11y.switchToFrench}
              className={`h-8 whitespace-nowrap shrink-0 rounded-md px-2.5 text-xs font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 ${
                language === 'fr'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              FR
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleDark}
            aria-pressed={isDark}
            aria-label={isDark ? t.a11y.switchToLight : t.a11y.switchToDark}
            title={isDark ? t.a11y.switchToLight : t.a11y.switchToDark}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors duration-150 hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100 dark:focus-visible:outline-blue-400"
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 dark:focus-visible:outline-blue-400"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Compact Mobile Drawer Navigation */}
      {mobileMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label={t.a11y.primaryNav}
          className="border-t border-zinc-200 bg-neutral-50 px-4 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex min-h-[44px] items-center rounded-md px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 ${
                      isActive
                        ? 'bg-zinc-100 font-semibold text-blue-700 dark:bg-zinc-900 dark:text-blue-400'
                        : 'font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
