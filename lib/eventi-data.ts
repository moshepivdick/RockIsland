import type { MessageKey } from '@/lib/i18n/messages';

export type EventBadge = 'aperitivo' | 'dinner' | 'dj';

export type UpcomingEvent = {
  id: string;
  dateKey: MessageKey;
  titleKey: MessageKey;
  artistKey: MessageKey;
  badge: EventBadge;
  image: string;
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: '1',
    dateKey: 'evUp1Date',
    titleKey: 'evUp1Title',
    artistKey: 'evUp1Artist',
    badge: 'dj',
    image:
      'https://img02.restaurantguru.com/ce3f-Restaurant-Rockisland-Rimini-exterior-2.jpg',
  },
  {
    id: '2',
    dateKey: 'evUp2Date',
    titleKey: 'evUp2Title',
    artistKey: 'evUp2Artist',
    badge: 'dinner',
    image:
      'https://img02.restaurantguru.com/c303-Rockisland-Rimini-meals-1.jpg',
  },
  {
    id: '3',
    dateKey: 'evUp3Date',
    titleKey: 'evUp3Title',
    artistKey: 'evUp3Artist',
    badge: 'aperitivo',
    image:
      'https://img02.restaurantguru.com/ccda-Restaurant-Rockisland-Rimini-design-1.jpg',
  },
  {
    id: '4',
    dateKey: 'evUp4Date',
    titleKey: 'evUp4Title',
    artistKey: 'evUp4Artist',
    badge: 'dj',
    image:
      'https://img02.restaurantguru.com/c90f-Rockisland-Rimini-exterior-1.jpg',
  },
];

export const PAST_EVENT_TITLE_KEYS: MessageKey[] = [
  'evPast1Title',
  'evPast2Title',
  'evPast3Title',
];
