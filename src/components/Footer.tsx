import { Link } from 'react-router-dom';
import { STUDIO_INFO } from '../data/studio';

export function Footer() {
  return (
    <footer className="bg-[#efe8df] border-t border-[#baa99c]/60">
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 py-12 lg:py-14 space-y-8">
        <div>
          <Link
            to="/"
            className="inline-block font-serif text-[30px] font-medium leading-[1.2] tracking-[-0.025em] text-[#251d1b]"
          >
            Naila
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="space-y-5 max-w-[440px]">
            <p className="text-[14px] leading-[1.55] tracking-[-0.02em] text-[#544a45]">
              {STUDIO_INFO.footerDescription}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] tracking-[-0.02em] text-[#251d1b]"
          >
            <Link
              to="/services"
              className="hover:underline underline-offset-4 transition-opacity hover:opacity-75"
            >
              Services
            </Link>
            <Link
              to="/works"
              className="hover:underline underline-offset-4 transition-opacity hover:opacity-75"
            >
              Our works
            </Link>
            <Link
              to="/about"
              className="hover:underline underline-offset-4 transition-opacity hover:opacity-75"
            >
              About
            </Link>
            <Link
              to="/book-appointment"
              className="hover:underline underline-offset-4 transition-opacity hover:opacity-75"
            >
              Book a visit
            </Link>
            <Link
              to="/faq"
              className="hover:underline underline-offset-4 transition-opacity hover:opacity-75 text-[#544a45]"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:underline underline-offset-4 transition-opacity hover:opacity-75 text-[#544a45]"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-[#baa99c]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] tracking-[-0.01em] text-[#5e514b]">
          <p>{STUDIO_INFO.copyright}</p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[#251d1b] hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#251d1b] hover:underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
