'use client';

import Link from 'next/link';
import { FadeUp } from '@/components/motion/FadeUp';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { IMG } from '@/lib/images';

/** Интерьер RockIsland; на md+ — background-attachment: fixed (параллакс в кадре секции). */
const CONV_BG = IMG.featured2;

export function ConventionCta() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden bg-[#050d14] py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${CONV_BG})` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/82 via-[#050d14]/90 to-[#050d14]/96"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,transparent_0%,rgba(5,13,20,0.5)_100%)]"
        aria-hidden
      />
      <FadeUp className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-light italic text-white drop-shadow-md md:text-[2.75rem] md:leading-snug">
            {t('convTitle')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/90 drop-shadow-sm md:text-base">
            {t('convBody')}
          </p>
          <Button asChild className="mt-10 rounded-full px-10 shadow-lg shadow-black/30">
            <Link href="/convention">{t('convCta')}</Link>
          </Button>
        </div>
      </FadeUp>
    </section>
  );
}
