'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Locale } from '@/lib/i18n/locales';
import { LOCALES, LOCALE_STORAGE_KEY } from '@/lib/i18n/locales';
import { bundles, type MessageKey } from '@/lib/i18n/messages';

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'it';
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (raw && (LOCALES as readonly string[]).includes(raw)) {
      return raw as Locale;
    }
  } catch {
    /* ignore */
  }
  return 'it';
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: MessageKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('it');

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: MessageKey) => {
      const pack = bundles[locale];
      return pack[key] ?? bundles.it[key] ?? String(key);
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
