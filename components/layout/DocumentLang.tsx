'use client';

import { useEffect } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { htmlLangFor } from '@/lib/i18n/locales';

/** Aggiorna `<html lang>` senza cambiare URL. */
export function DocumentLang() {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = htmlLangFor(locale);
  }, [locale]);

  return null;
}
