import ctaFinalImg from '../assets/images/cta_final_nails_1794743058093.jpg';
import whySpaceImg from '../assets/images/why_calm_space_1794743062559.jpg';

const heroImg = '/assets/aistudio/image_aaf6fe89.png';
const whyTechImg = '/assets/aistudio/image_01268f12.png';
const whyMaterialsImg = '/assets/aistudio/image_cc948884.png';

export const STUDIO_MEDIA = {
  hero: heroImg,
  finalCta: ctaFinalImg,
  whySkilledTechnicians: whyTechImg,
  whyPremiumMaterials: whyMaterialsImg,
  whyCalmSpace: whySpaceImg,
};

export const STUDIO_INFO = {
  name: 'Naila',
  tagline: 'Thoughtful care · Refined finishes · Your style',
  footerDescription:
    'A calm, modern nail studio where beauty meets relaxation, offering thoughtfully crafted nail care and elegant designs to complement your unique style.',
  copyright: '© 2026 Naila. All rights reserved.',
  contact: {
    email: 'appointments@nailastudio.example',
    phone: 'By appointment enquiry (configure studio phone before launch)',
    location: 'Private studio location shared upon appointment scheduling (configure studio address before launch)',
    hours: 'Appointments arranged by request · Configure studio hours before launch',
  },
};

export interface BenefitBlock {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export const WHY_CHOOSE_US_BLOCKS: BenefitBlock[] = [
  {
    id: 'skilled-technicians',
    title: 'Skilled Technicians',
    description:
      'We start with the length, shape, and finish you want. Your technician takes time over the details, from preparing the nail to checking the final edges.',
    highlights: [
      'Shape and length suited to your routine',
      'Careful nail and cuticle preparation',
      'An even finish with tidy edges',
    ],
    image: STUDIO_MEDIA.whySkilledTechnicians,
    imageAlt: 'Nail technician carefully applying sheer nude polish with a fine brush',
    reverse: false,
  },
  {
    id: 'premium-materials',
    title: 'Premium Materials',
    description:
      'We choose products to suit the service and the look you want. A sheer wash of colour, a glossy gel finish, and detailed nail art each call for a different approach.',
    highlights: [
      'Sheer and opaque colour options',
      'Polish and gel suited to your service',
      'Finishes from soft shine to shimmer',
    ],
    image: STUDIO_MEDIA.whyPremiumMaterials,
    imageAlt: 'Curated gel polishes, top coats, brushes, and precision nail files styled in a crystal glass',
    reverse: true,
  },
  {
    id: 'calm-clean-space',
    title: 'Calm & Clean Space',
    description:
      'Take a moment to settle in, look through colours, and talk through your ideas. The studio is set up to give you a comfortable place to sit and time to make your choices.',
    highlights: [
      'A tidy station for your appointment',
      'Comfortable seating for hand and foot care',
      'Time to browse colours and discuss your design',
    ],
    image: STUDIO_MEDIA.whyCalmSpace,
    imageAlt: 'Calm boutique nail studio with cream armchair, oak platform, and ceramic foot basin',
    reverse: false,
  },
];
