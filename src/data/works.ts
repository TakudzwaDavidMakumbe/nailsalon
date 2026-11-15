const work01Img = '/assets/aistudio/01_b76febc6.webp';
const work02Img = '/assets/aistudio/02_31ec1782.webp';
const work03Img = '/assets/aistudio/03_7ef39d44.webp';
const work04Img = '/assets/aistudio/04_cf15f872.webp';
const work05Img = '/assets/aistudio/05_450feb4f.webp';
const work06Img = '/assets/aistudio/06_bb1c5caa.webp';
const work07Img = '/assets/aistudio/07_3e491edb.webp';
const work08Img = '/assets/aistudio/08_1862c197.webp';
const work09Img = '/assets/aistudio/09_05b8f034.webp';
const work10Img = '/assets/aistudio/10_02ff76cb.webp';
const work11Img = '/assets/aistudio/11_6d344c43.webp';
const work12Img = '/assets/aistudio/12_745bf351.webp';

export type WorkCategory =
  | 'All'
  | 'Natural & Nude'
  | 'Gel & Gloss'
  | 'Nail Art'
  | 'French & Tips';

export interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, 'All'>;
  description: string;
  image: string;
  desktopCol: 1 | 2 | 3;
  desktopHeightClass: string;
  mobileCol: 1 | 2;
  mobileHeightClass: string;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  'All',
  'Natural & Nude',
  'Gel & Gloss',
  'Nail Art',
  'French & Tips',
];

export const PORTFOLIO_WORKS: WorkItem[] = [
  {
    id: 'espresso-ombre-manicure',
    title: 'Espresso ombré manicure',
    category: 'Natural & Nude',
    description: 'Warm espresso-to-nude glossy gradient on softly rounded natural almond nails.',
    image: work01Img,
    desktopCol: 1,
    desktopHeightClass: 'lg:h-[340px]',
    mobileCol: 1,
    mobileHeightClass: 'h-[230px] sm:h-[290px]',
  },
  {
    id: 'cherry-french-manicure',
    title: 'Cherry French manicure',
    category: 'Nail Art',
    description: 'Milky ivory square set paired with deep cherry-red French tips and hand-painted cherries.',
    image: work04Img,
    desktopCol: 1,
    desktopHeightClass: 'lg:h-[280px]',
    mobileCol: 2,
    mobileHeightClass: 'h-[230px] sm:h-[280px]',
  },
  {
    id: 'coastal-pearl-almond',
    title: 'Coastal pearl almond set',
    category: 'Nail Art',
    description: 'Translucent sky-blue and blush almond extensions with sculpted shells, pearls, and gold accents.',
    image: work07Img,
    desktopCol: 1,
    desktopHeightClass: 'lg:h-[400px]',
    mobileCol: 1,
    mobileHeightClass: 'h-[270px] sm:h-[330px]',
  },
  {
    id: 'matte-sage-blush-print',
    title: 'Matte sage & blush print',
    category: 'Gel & Gloss',
    description: 'Velvety matte green finish contrasted with soft blush spot accent nails.',
    image: work06Img,
    desktopCol: 1,
    desktopHeightClass: 'lg:h-[300px]',
    mobileCol: 2,
    mobileHeightClass: 'h-[210px] sm:h-[260px]',
  },
  {
    id: 'classic-white-french',
    title: 'Classic white French tips',
    category: 'French & Tips',
    description: 'Clean sheer pink base finished with crisp, even white French square tips.',
    image: work11Img,
    desktopCol: 2,
    desktopHeightClass: 'lg:h-[260px]',
    mobileCol: 2,
    mobileHeightClass: 'h-[200px] sm:h-[250px]',
  },
  {
    id: 'lavender-leopard-set',
    title: 'Lavender leopard accent set',
    category: 'Gel & Gloss',
    description: 'Glossy pastel lilac square gel set featuring coordinated plum leopard accent nails.',
    image: work02Img,
    desktopCol: 2,
    desktopHeightClass: 'lg:h-[380px]',
    mobileCol: 1,
    mobileHeightClass: 'h-[250px] sm:h-[310px]',
  },
  {
    id: 'crimson-daisy-french',
    title: 'Crimson daisy French tips',
    category: 'French & Tips',
    description: 'Glossy crimson-red French tips accented with sweeping gold linework and white daisy details.',
    image: work08Img,
    desktopCol: 2,
    desktopHeightClass: 'lg:h-[280px]',
    mobileCol: 2,
    mobileHeightClass: 'h-[230px] sm:h-[280px]',
  },
  {
    id: 'navy-french-heart-botanical',
    title: 'Navy French heart & leaf set',
    category: 'French & Tips',
    description: 'Deep navy square French tips paired with fine minimalist heart, leaf, and star line art.',
    image: work12Img,
    desktopCol: 2,
    desktopHeightClass: 'lg:h-[380px]',
    mobileCol: 1,
    mobileHeightClass: 'h-[250px] sm:h-[310px]',
  },
  {
    id: 'cobalt-floral-crystal',
    title: 'Cobalt floral crystal set',
    category: 'Nail Art',
    description: 'Deep cobalt French tips framed with white sculpted blossoms, gold stems, and crystal trim.',
    image: work05Img,
    desktopCol: 3,
    desktopHeightClass: 'lg:h-[400px]',
    mobileCol: 1,
    mobileHeightClass: 'h-[270px] sm:h-[330px]',
  },
  {
    id: 'periwinkle-pearl-bow',
    title: 'Periwinkle pearl & bow tips',
    category: 'French & Tips',
    description: 'Periwinkle-lavender French square tips finished with delicate pearl arcs and a white 3D bow.',
    image: work09Img,
    desktopCol: 3,
    desktopHeightClass: 'lg:h-[300px]',
    mobileCol: 2,
    mobileHeightClass: 'h-[220px] sm:h-[270px]',
  },
  {
    id: 'stiletto-hibiscus-leopard',
    title: 'Stiletto hibiscus leopard set',
    category: 'Nail Art',
    description: 'Long sculpted stiletto extensions with pink leopard French tips and 3D hibiscus blossoms.',
    image: work10Img,
    desktopCol: 3,
    desktopHeightClass: 'lg:h-[340px]',
    mobileCol: 1,
    mobileHeightClass: 'h-[240px] sm:h-[300px]',
  },
  {
    id: 'neon-aura-french',
    title: 'Neon aura French tips',
    category: 'Gel & Gloss',
    description: 'Sheer jelly pink nails outlined with glowing magenta and lime-citrus aura French borders.',
    image: work03Img,
    desktopCol: 3,
    desktopHeightClass: 'lg:h-[260px]',
    mobileCol: 2,
    mobileHeightClass: 'h-[200px] sm:h-[250px]',
  },
];
