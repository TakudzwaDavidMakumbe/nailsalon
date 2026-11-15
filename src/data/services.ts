const manicureImg = '/assets/aistudio/Manicure_179a4cbb.webp';
const pedicureImg = '/assets/aistudio/Pedicure_3d04ed59.webp';
const gelPolishImg = '/assets/aistudio/Gel_Polish_f4959438.webp';
const nailArtImg = '/assets/aistudio/Nail_Art_3c87a699.webp';
const nailExtensionsImg = '/assets/aistudio/Nail_Extensions_e592d417.webp';
const removalCareImg = '/assets/aistudio/Removal___Care_890f4082.webp';

export interface ServiceDetailSection {
  heading: string;
  body: string;
}

export interface NailService {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  sections: ServiceDetailSection[];
  included: string[];
  recommendedFinishes: string[];
}

export const NAIL_SERVICES: NailService[] = [
  {
    slug: 'manicure',
    title: 'Manicure',
    shortDescription: 'Clean, shape, and perfect your natural nails.',
    image: manicureImg,
    imageAlt: 'Glossy natural nude manicure with shaped squoval nails beside a cream knit sleeve',
    sections: [
      {
        heading: 'A polished everyday essential',
        body: 'We begin with a conversation about your preferred length, shape, and finish. Your nails are filed and shaped, cuticles are tidied with care, and the nail surface is prepared for an even finish.',
      },
      {
        heading: 'Your appointment',
        body: 'Choose a natural buff or a classic polish finish. Let us know if you have existing product so we can plan any removal.',
      },
      {
        heading: 'Keeping your nails cared for',
        body: 'Apply cuticle oil regularly and wear gloves for cleaning. Avoid using nails as tools, and arrange a refresh when the polish begins to wear.',
      },
    ],
    included: [
      'Shape and length consultation tailored to your hands',
      'Gentle nail filing and smoothing',
      'Careful cuticle tidying and surface preparation',
      'Natural buff or classic sheer-to-opaque polish finish',
      'Nourishing cuticle oil and hand finish',
    ],
    recommendedFinishes: [
      'High-gloss natural buff',
      'Sheer milky ivory or petal blush',
      'Classic neutral cream polish',
    ],
  },
  {
    slug: 'pedicure',
    title: 'Pedicure',
    shortDescription: 'Relaxing care for beautifully finished feet.',
    image: pedicureImg,
    imageAlt: 'Relaxing spa pedicure with glossy soft-blush toenails on a cream towel beside a candle and flower',
    sections: [
      {
        heading: 'A little time for your feet',
        body: 'This cosmetic pedicure focuses on clean shaping, gentle surface care, and a neat polish finish. We discuss your preferences before preparing the toenails and tidying the cuticle area.',
      },
      {
        heading: 'Your appointment',
        body: 'Choose your preferred nail shape and colour, or keep the finish natural. Bring open-toe shoes if you select classic polish so it has time to dry comfortably.',
      },
      {
        heading: 'After your visit',
        body: 'Moisturise your feet and avoid tight footwear while polish dries. Discuss any concerns with the studio before booking cosmetic care.',
      },
    ],
    included: [
      'Warm soak and comfortable seated foot care',
      'Neat toenail trimming and edge shaping',
      'Gentle cuticle tidy and surface buffing',
      'Choice of natural finish or smooth colour polish',
      'Hydrating foot cream application',
    ],
    recommendedFinishes: [
      'Clean natural sheen',
      'Soft pearl nude or warm blush',
      'Minimalist micro-French tips',
    ],
  },
  {
    slug: 'gel-polish',
    title: 'Gel Polish',
    shortDescription: 'A smooth, glossy colour finish for your natural nails.',
    image: gelPolishImg,
    imageAlt: 'Smooth, glossy sheer blush gel polish finish on natural nails',
    sections: [
      {
        heading: 'Colour with a lasting shine',
        body: 'Gel polish pairs careful nail preparation with thin layers of colour cured under a suitable lamp. It is a good option when you want a glossy, even finish on your existing nail length.',
      },
      {
        heading: 'Your appointment',
        body: 'We shape the natural nail, prepare the surface, and apply your chosen shade. Tell us about existing gel at booking so we can allow for a separate removal step.',
      },
      {
        heading: 'A gentle refresh',
        body: 'Use cuticle oil and protect your hands during housework. Do not peel the product away; book a professional removal or refresh.',
      },
    ],
    included: [
      'Natural nail shaping and detailed cuticle preparation',
      'Thin, even base and gel colour layering',
      'Smooth lamp-cured gloss or velvet matte top coat',
      'Shade consultation across sheer, neutral, and deeper tones',
    ],
    recommendedFinishes: [
      'Mirror-gloss dusty rosewood or taupe',
      'Sheer glass-pink neutral wash',
      'Deep espresso or muted sage olive',
    ],
  },
  {
    slug: 'nail-art',
    title: 'Nail Art',
    shortDescription: 'Personal details, from delicate accents to statement designs.',
    image: nailArtImg,
    imageAlt: 'Custom pink French nail art with 3D bow, heart detail, and fine crystal accents',
    sections: [
      {
        heading: 'A set that feels like you',
        body: 'Bring a reference or choose a direction with your technician. Nail art can include fine lines, shimmer, French details, or a mix of colours tailored to your nail length and shape.',
      },
      {
        heading: 'Plan your design',
        body: 'The detail and number of decorated nails affect the appointment time. Share your inspiration when booking so we can confirm what is achievable and prepare the right materials.',
      },
      {
        heading: 'Keep the details beautiful',
        body: 'Wear gloves for cleaning and avoid picking at raised details. Arrange a repair if an embellishment loosens instead of pulling it away yourself.',
      },
    ],
    included: [
      'Design consultation and palette matching',
      'Base preparation tailored to your chosen nail length',
      'Hand-painted fine lines, botanicals, shimmer, or French accents',
      'Protective glossy top seal over artwork',
    ],
    recommendedFinishes: [
      'Micro-botanical lines and subtle pearl dots',
      'Velvet cat-eye shimmer or champagne ombré',
      'Ultra-thin micro French tips',
    ],
  },
  {
    slug: 'nail-extensions',
    title: 'Nail Extensions',
    shortDescription: 'Added length and a balanced shape, tailored to your hands.',
    image: nailExtensionsImg,
    imageAlt: 'Structured square nail extensions with crisp French tips and a glossy taupe accent nail',
    sections: [
      {
        heading: 'Your preferred length, thoughtfully shaped',
        body: 'Extensions add length beyond the natural nail. Your technician will discuss the shape and practical length that suit your daily routine before preparing the nails and building the set.',
      },
      {
        heading: 'Your appointment',
        body: 'We refine the shape and finish with your chosen colour. Share any existing extensions and design references in advance so removal, maintenance, or detailed artwork can be planned.',
      },
      {
        heading: 'Maintaining your set',
        body: 'Keep the underside clean and dry and avoid using extensions to open or pry objects. Book maintenance as the nails grow, and arrange professional removal when you are ready for a change.',
      },
    ],
    included: [
      'Length and silhouette consultation (oval, almond, or squoval)',
      'Careful natural nail and cuticle preparation',
      'Structured extension build with balanced apex and clean edges',
      'Choice of sheer neutral or full colour finish',
    ],
    recommendedFinishes: [
      'Translucent milky peach or soft blush',
      'Clean tapered almond neutral',
      'Soft ivory French overlay',
    ],
  },
  {
    slug: 'removal-care',
    title: 'Removal & Care',
    shortDescription: 'Careful product removal and a fresh start for natural nails.',
    image: removalCareImg,
    imageAlt: 'Gloved nail technician performing careful precision product removal and natural nail care',
    sections: [
      {
        heading: 'Give your nails a considered reset',
        body: 'This service focuses on removing existing product with a method appropriate to the material, followed by shaping and a simple natural finish. Tell us what product you currently wear when booking.',
      },
      {
        heading: 'What to expect',
        body: 'The technician checks the existing set, removes the product carefully, and tidies the natural nail. If you want a new colour or set afterwards, book that service alongside removal.',
      },
      {
        heading: 'Back to your routine',
        body: 'Keep nails comfortably short if needed, use cuticle oil, and protect them from repeated water and detergent exposure. Avoid peeling any remaining product at home.',
      },
    ],
    included: [
      'Assessment of existing gel or extension product',
      'Gentle, controlled removal without rushing or scraping',
      'Natural nail shaping and edge smoothing',
      'Cuticle tidy and restorative oil nourishment',
    ],
    recommendedFinishes: [
      'Bare, hydrated natural nail finish',
      'Soft strengthening clear coat or subtle buff',
    ],
  },
];

export function getServiceBySlug(slug: string): NailService | undefined {
  return NAIL_SERVICES.find((service) => service.slug === slug);
}
