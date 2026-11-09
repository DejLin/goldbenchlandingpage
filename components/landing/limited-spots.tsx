"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function LimitedSpots({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold",
        className,
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
      </span>
      {t.common.limitedSpots}
    </p>
  );
}
