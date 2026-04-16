'use client';

import Link from 'next/link';
import { Phone, CalendarDays } from 'lucide-react';
import { CONTACT } from '@/lib/site';
import { useLocale } from '@/contexts/LocaleContext';

export function MobileBottomBar() {
  const { t } = useLocale();

  return (
    <div className="safe-area-bottom fixed inset-x-0 bottom-0 z-40 border-t border-navy/20 bg-gold text-navy md:hidden">
      <div className="grid h-14 grid-cols-2 divide-x divide-navy/15">
        <a
          href={CONTACT.phoneHref}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 text-sm font-semibold tracking-wide"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          {t('mobileCall')}
        </a>
        <Link
          href="/prenota"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 text-sm font-semibold tracking-wide"
        >
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
          {t('mobileBook')}
        </Link>
      </div>
    </div>
  );
}
