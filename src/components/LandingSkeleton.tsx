interface LandingSkeletonProps {
  loadingLabel: string;
  isExiting: boolean;
  onAnimationComplete: () => void;
}

export function LandingSkeleton({
  loadingLabel,
  isExiting,
  onAnimationComplete,
}: LandingSkeletonProps) {
  return (
    <div
      role="status"
      aria-busy={!isExiting}
      aria-label={loadingLabel}
      className={`fixed inset-0 z-50 overflow-hidden bg-neutral-50 transition-opacity duration-400 ease-editorial dark:bg-zinc-950 ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <span className="sr-only">{loadingLabel}</span>

      {/* Sentinel element matching the single-pass shimmer timing to fire onAnimationEnd reliably */}
      <div
        aria-hidden="true"
        onAnimationEnd={onAnimationComplete}
        className="skeleton-sweep-sentinel pointer-events-none absolute inset-x-0 top-0 h-px opacity-0"
      />

      {/* Skeleton Navbar (matches 64px 3-zone header) */}
      <div className="sticky top-0 z-40 border-b border-zinc-200/80 bg-neutral-50/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="skeleton-shimmer-once h-6 w-6 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once h-5 w-14 rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <div className="flex flex-col items-center gap-1.5 pt-1">
              <div className="skeleton-shimmer-once h-3.5 w-12 rounded bg-zinc-300 dark:bg-zinc-700" />
              <div className="h-0.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="skeleton-shimmer-once h-3.5 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once h-3.5 w-14 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once h-3.5 w-14 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once h-3.5 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="skeleton-shimmer-once h-10 w-20 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once h-10 w-10 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once h-11 w-11 rounded-lg bg-zinc-200 md:hidden dark:bg-zinc-800" />
          </div>
        </div>
      </div>

      {/* Skeleton Hero Service Description */}
      <section className="py-14 sm:py-20 lg:py-24" aria-hidden="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="skeleton-shimmer-once h-10 w-full max-w-xl rounded-lg bg-zinc-200 sm:h-12 dark:bg-zinc-800" />
            <div className="skeleton-shimmer-once mt-2.5 h-10 w-3/4 max-w-md rounded-lg bg-zinc-200 sm:h-12 dark:bg-zinc-800" />

            <div className="mt-6 flex w-full max-w-xl flex-col items-center gap-2.5">
              <div className="skeleton-shimmer-once h-4 w-full max-w-lg rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="skeleton-shimmer-once h-4 w-2/3 max-w-sm rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Skeleton First Carousel Section (Mobile Preview) */}
      <section
        className="border-t border-zinc-200 py-16 sm:py-24 dark:border-zinc-800"
        aria-hidden="true"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="w-full max-w-2xl space-y-3">
              <div className="skeleton-shimmer-once h-8 w-56 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <div className="skeleton-shimmer-once h-4 w-full max-w-lg rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="skeleton-shimmer-once h-4 w-3/4 max-w-md rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="skeleton-shimmer-once h-4 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="skeleton-shimmer-once h-11 w-11 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <div className="skeleton-shimmer-once h-11 w-11 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4 sm:p-8 lg:p-10 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="mx-auto w-full max-w-[296px] rounded-[2rem] border border-zinc-300 bg-zinc-200/70 p-2.5 dark:border-zinc-700 dark:bg-zinc-900">
              <div className="mb-2 flex justify-center">
                <div className="h-1 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <div className="skeleton-shimmer-once aspect-[9/16] w-full rounded-[1.45rem] bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="mt-8 hidden items-center justify-center border-t border-zinc-200/80 pt-5 md:flex dark:border-zinc-800">
              <div className="flex h-10 items-center gap-3">
                <div className="skeleton-shimmer-once h-1.5 w-7 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="skeleton-shimmer-once h-1.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="skeleton-shimmer-once h-1.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="skeleton-shimmer-once h-1.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}