export type FaqCategory =
  | 'All'
  | 'Services'
  | 'Booking'
  | 'Nail Preparation'
  | 'Aftercare'
  | 'Rescheduling'
  | 'General Questions';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: Exclude<FaqCategory, 'All'>;
  featuredOnHome?: boolean;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  'All',
  'Services',
  'Booking',
  'Nail Preparation',
  'Aftercare',
  'Rescheduling',
  'General Questions',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'which-service',
    question: 'Which nail service should I book?',
    answer:
      'Start with the finish you want: natural care, gel colour, detailed nail art, or added length. Share a reference when you enquire and we can help you choose.',
    category: 'Services',
    featuredOnHome: true,
  },
  {
    id: 'send-reference',
    question: 'Can I send a nail design reference before my appointment?',
    answer:
      'Yes. You can upload an inspiration photo directly in our appointment request form or mention your preferred colour palette and shape in your notes so your technician can prepare suitable shades and tools ahead of your visit.',
    category: 'Booking',
    featuredOnHome: true,
  },
  {
    id: 'arrange-removal',
    question: 'Should I arrange removal if I already have gel or extensions?',
    answer:
      'Yes, please let us know what product is currently on your nails when submitting your request. Mentioning existing gel or extensions ensures we allow time for safe, unhurried removal before starting a fresh set.',
    category: 'Nail Preparation',
    featuredOnHome: true,
  },
  {
    id: 'aftercare',
    question: 'How do I care for my nails after my appointment?',
    answer:
      'Apply cuticle oil daily, wear gloves during housework or prolonged water exposure, and avoid using your nails to open or pry objects. When it is time for a change, book professional removal rather than peeling product away.',
    category: 'Aftercare',
    featuredOnHome: true,
  },
  {
    id: 'reschedule-cancel',
    question: 'What should I do if I need to reschedule or cancel?',
    answer:
      'Please contact the studio directly via our contact page or phone/email as soon as your plans change so we can help arrange an alternative appointment time.',
    category: 'Rescheduling',
    featuredOnHome: true,
  },
  {
    id: 'sheer-vs-opaque',
    question: 'Can I browse colour shades in person during my visit?',
    answer:
      'Of course. Every appointment includes time to look through sheer washes, classic creams, glossy gels, and subtle shimmers beside your skin tone before your technician begins.',
    category: 'Services',
  },
  {
    id: 'natural-nail-prep',
    question: 'Should I trim or file my nails before coming in?',
    answer:
      'There is no need to shape your nails beforehand. Arriving with your natural length allows your technician to recommend balanced proportions and file everything evenly during your appointment.',
  category: 'Nail Preparation',
  },
  {
    id: 'open-toe-pedicure',
    question: 'What should I bring to a pedicure appointment?',
    answer:
      'If you choose a classic polish pedicure rather than lamp-cured gel, bringing open-toe sandals helps keep the finish pristine while it settles after your visit.',
    category: 'General Questions',
  },
  {
    id: 'booking-request-process',
    question: 'How does the appointment request process work?',
    answer:
      'Select your preferred service, share your ideal date and time window, and include any style notes or inspiration photos. The studio reviews every request personally to confirm availability.',
    category: 'Booking',
  },
  {
    id: 'studio-hygiene',
    question: 'How are studio tools and stations prepared between clients?',
    answer:
      'Each appointment takes place at a freshly prepared, tidy station using thoroughly sanitized metal implements and single-use files or buffers where appropriate.',
    category: 'General Questions',
  },
];
