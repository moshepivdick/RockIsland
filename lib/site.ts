/** Canonical site URL for metadata and hreflang */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rockislandrimini.it';

export const CONTACT = {
  phone: '+39 0541 1497100',
  phoneHref: 'tel:+3905411497100',
  email: 'info@rockislandrimini.it',
  address: 'Molo di Levante, Largo Ruggero Boscovich, 47921 Rimini',
};

/** Google Maps: stesso punto usato in /prenota */
export const MAP = {
  embedSrc:
    'https://www.google.com/maps?q=Rock+Island+Rimini+Molo+di+Levante&z=15&output=embed',
  externalHref:
    'https://www.google.com/maps/search/?api=1&query=Rock+Island+Rimini+Molo+di+Levante',
} as const;
