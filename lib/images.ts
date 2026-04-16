/**
 * Immagini RockIsland: sito ufficiale (Wix) + foto visitatori da RestaurantGuru.
 *
 * TripAdvisor (listing g187807-d665384): la pagina risponde ai crawler con
 * CAPTCHA/DataDome, quindi gli URL `dynamic-media.tripadvisor.com` non sono
 * estraibili automaticamente. Per aggiungere foto TA: apri la scheda nel browser,
 * tasto destro sull’immagine → “Apri immagine in una nuova scheda”, copia l’URL
 * in `TRIPADVISOR_EXTRA` qui sotto (e abilita l’host in `next.config.mjs`).
 *
 * @see https://www.rockislandrimini.it/rockisland
 * @see https://www.tripadvisor.it/Attraction_Review-g187807-d665384-Reviews-Rock_Island-Rimini_Province_of_Rimini_Emilia_Romagna.html
 * @see https://restaurantguru.it/Rockisland-molo-di-levante-Rimini
 */

import type { MenuCategoryId } from '@/lib/menu-data';

const WIX = {
  gallery1: '1be8b5_cce8f10635514505a1cb685c7737176d~mv2.jpeg',
  location2: '1be8b5_5dbee6ca6cfc4bd78b93b24f5036661d~mv2.jpeg',
  location3: '1be8b5_4c40913003234f93b2b7ad6fc7194328~mv2.jpeg',
  promo3418: '1be8b5_1b58fb761d704df79f5ac8e38fd50f0f~mv2.png',
} as const;

/** Foto del locale pubblicate su RestaurantGuru (galleria visitatori). */
const GURU = {
  heroAlt:
    'https://img02.restaurantguru.com/cd04-exterior-Rockisland-Rimini-1.jpg',
  exterior1:
    'https://img02.restaurantguru.com/c90f-Rockisland-Rimini-exterior-1.jpg',
  exterior2:
    'https://img02.restaurantguru.com/ce3f-Restaurant-Rockisland-Rimini-exterior-2.jpg',
  facade: 'https://img02.restaurantguru.com/ca50-Rockisland-Rimini-facade-1.jpg',
  interiorBar:
    'https://img02.restaurantguru.com/ccda-Restaurant-Rockisland-Rimini-design-1.jpg',
  interior: 'https://img02.restaurantguru.com/c341-interior-Rockisland-Rimini.jpg',
  meals: 'https://img02.restaurantguru.com/c303-Rockisland-Rimini-meals-1.jpg',
  pizza: 'https://img02.restaurantguru.com/cfa4-Restaurant-Rockisland-Rimini-pizza.jpg',
  /** Stesso asset dell’og:image della scheda RG (verificato HTTP 200) */
  ogCard:
    'https://img.restaurantguru.com/w550/h367/r9a6-Rockisland-Rimini-design-2022-10-2.jpg',
} as const;

/**
 * Incolla qui URL immagine da TripAdvisor (scheda o recensioni), uno per riga.
 * Esempio: `https://dynamic-media.tripadvisor.com/media/photo-o/1a/2b/3c/4d.jpg`
 */
export const TRIPADVISOR_EXTRA: readonly string[] = [];

export function wixFill(file: string, w: number, h: number): string {
  const encoded = file.replace(/~/g, '%7E');
  return `https://static.wixstatic.com/media/${encoded}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01,enc_auto/${encoded}`;
}

/** Open Graph: mix ufficiale + galleria RG ad alta risoluzione */
export const OG_IMAGE = GURU.ogCard;

/** Immagine guida per ogni sezione menu (editoriale, coerente con il locale). */
export const MENU_CATEGORY_PHOTO: Record<MenuCategoryId, string> = {
  antipasti: GURU.meals,
  primi:
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1100&q=85',
  secondi:
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1100&q=85',
  pizza: GURU.pizza,
  dolci:
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1100&q=85',
  cocktail: GURU.interiorBar,
};

export const IMG = {
  /** Hero: ufficiale Wix; su mobile stesso asset */
  heroPoster: wixFill(WIX.gallery1, 1920, 1080),
  /** Sezione esperienza: esterno dal molo (foto visitatori RG) */
  experience: GURU.heroAlt,
  /** Convention / giorno: facciata RG */
  conventionHero: GURU.facade,
  menuAntipasti: GURU.meals,
  menuPesce: wixFill(WIX.location2, 900, 1100),
  menuPizza: GURU.pizza,
  menuCocktail: GURU.interiorBar,
  featured1: GURU.exterior2,
  featured2: GURU.interior,
  eventi: GURU.exterior1,
} as const;
