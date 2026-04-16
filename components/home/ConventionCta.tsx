'use client';

import Link from 'next/link';
import { FadeUp } from '@/components/motion/FadeUp';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';

export function ConventionCta() {
  const { t } = useLocale();

  return (
    <section className="bg-[#08121c] py-20 md:py-24">
      <FadeUp>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-light italic text-white md:text-[2.75rem] md:leading-snug">
            {t('convTitle')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-mist">
            {t('convBody')}
          </p>
          <Button asChild className="mt-10 rounded-full px-10">
            <Link href="/convention">{t('convCta')}</Link>
          </Button>
        </div>
      </FadeUp>
    </section>
  );
}
