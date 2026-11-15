import portraitDewi from '../assets/images/portrait_dewi_1794743067532.jpg';
import portraitMaya from '../assets/images/portrait_maya_1794743067565.jpg';
import portraitNadia from '../assets/images/portrait_nadia_1794743067807.jpg';
import portraitRani from '../assets/images/portrait_rani_1794743068134.jpg';
import portraitAlya from '../assets/images/portrait_alya_1794743069083.jpg';
import portraitSofia from '../assets/images/portrait_sofia_1794743068869.jpg';

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  portrait: string;
  column: 1 | 2 | 3;
}

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'dewi-s',
    quote:
      '“The care and attention made the whole appointment feel like a little escape. My nails looked beautiful for weeks.”',
    name: 'Dewi S.',
    location: 'Jakarta',
    portrait: portraitDewi,
    column: 1,
  },
  {
    id: 'maya-k',
    quote:
      '“The studio is calm, the team is meticulous, and the result feels effortlessly polished.”',
    name: 'Maya K.',
    location: 'Jakarta',
    portrait: portraitMaya,
    column: 1,
  },
  {
    id: 'nadia-p',
    quote:
      '“Every detail felt considered, from the colour consultation to the final finish. Such a lovely experience.”',
    name: 'Nadia P.',
    location: 'Bandung',
    portrait: portraitNadia,
    column: 2,
  },
  {
    id: 'rani-t',
    quote:
      '“Finally, a manicure that feels as good as it looks. The shape and finish were exactly right.”',
    name: 'Rani T.',
    location: 'Yogyakarta',
    portrait: portraitRani,
    column: 2,
  },
  {
    id: 'alya-r',
    quote:
      '“I came in with a vague idea and left with nails that felt completely me. I’ve already booked my next visit.”',
    name: 'Alya R.',
    location: 'Surabaya',
    portrait: portraitAlya,
    column: 3,
  },
  {
    id: 'sofia-l',
    quote:
      '“A beautifully personal experience. I loved how they took the time to get every detail just right.”',
    name: 'Sofia L.',
    location: 'Bali',
    portrait: portraitSofia,
    column: 3,
  },
];
