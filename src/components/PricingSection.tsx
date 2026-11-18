import type { TranslationContent } from '../data/translations';

interface PricingSectionProps {
  t: TranslationContent;
}

export function PricingSection({ t }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-20 border-t border-zinc-200 py-16 sm:py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="pricing-heading"
            className="heading-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100"
          >
            <span className="font-mono-tabular mr-2.5 text-lg font-medium text-blue-700 dark:text-blue-400">
              {t.pricing.number}
            </span>
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900">
                <th
                  scope="col"
                  className="px-6 py-4 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
                >
                  {t.pricing.headers.zone}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-right text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
                >
                  {t.pricing.headers.price}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {t.pricing.rows.map((row) => (
                <tr
                  key={row.zone}
                  className="transition-colors duration-150 hover:bg-zinc-50 dark:hover:bg-zinc-900/80"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    {row.zone}
                  </th>
                  <td className="font-mono-tabular px-6 py-4 text-right text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
