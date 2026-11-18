import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface FooterProps {
  t: TranslationContent;
}

export function Footer({ t }: FooterProps) {
  const youtubeHref = t.footer.youtube.href.trim();
  const hasYoutubeLink = youtubeHref.length > 0;

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-zinc-200 py-14 sm:py-16 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2
              id="contact-heading"
              className="heading-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100"
            >
              {t.footer.title}
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.footer.subtitle}
            </p>
          </div>

          <a
            href="#service"
            className="inline-flex h-10 w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-3.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100 dark:focus-visible:outline-blue-400"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Instagram */}
          <a
            href={t.footer.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:outline-blue-400"
          >
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-neutral-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {t.footer.instagram.label}
                </p>
                <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {t.footer.instagram.handle}
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200"
              aria-hidden="true"
            />
          </a>

          {/* YouTube (link retrieved dynamically from translations.ts) */}
          {hasYoutubeLink ? (
            <a
              href={youtubeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:outline-blue-400"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-neutral-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3v6Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {t.footer.youtube.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {t.footer.youtube.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200"
                aria-hidden="true"
              />
            </a>
          ) : (
            <div
              aria-disabled="true"
              className="flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white/60 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-neutral-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3v6Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {t.footer.youtube.label}
                  </p>
                  <p className="truncate text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {t.footer.youtube.pendingLabel}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Email */}
          <a
            href={`mailto:${t.footer.email.address}`}
            className="group flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:outline-blue-400"
          >
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-neutral-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {t.footer.email.label}
                </p>
                <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {t.footer.email.address}
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200"
              aria-hidden="true"
            />
          </a>

          {/* WhatsApp */}
          <a
            href={t.footer.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:outline-blue-400"
          >
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-neutral-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                  <path d="M9.5 9.5c.3 1.8 2.2 3.7 4 4l1.1-.8a.8.8 0 0 1 .9 0l1.4.9a.8.8 0 0 1 .3.9 2.2 2.2 0 0 1-2.1 1.5c-3.4 0-6.6-3.2-6.6-6.6a2.2 2.2 0 0 1 1.5-2.1.8.8 0 0 1 .9.3l.9 1.4a.8.8 0 0 1 0 .9l-.8 1.1" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {t.footer.whatsapp.label}
                </p>
                <p className="font-mono-tabular truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {t.footer.whatsapp.number}
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
