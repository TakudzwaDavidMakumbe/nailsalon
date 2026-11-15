import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { StudioButton } from './Button';

const NAV_LINKS = [
  { label: 'Services', to: '/services', homeHash: '#services' },
  { label: 'Our works', to: '/works', homeHash: '#works' },
  { label: 'About', to: '/about', homeHash: '#about' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (to: string, homeHash: string) => {
    setMobileOpen(false);
    if (isHome) {
      const target = document.querySelector(homeHash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(to);
  };

  return (
    <header
      className={
        isHome
          ? 'absolute top-0 inset-x-0 z-40 w-full bg-transparent'
          : 'sticky top-0 z-40 w-full bg-[#f8f5ef]/95 backdrop-blur-md border-b border-[#e6dbcf]'
      }
    >
      <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 py-6 flex items-center justify-between gap-8">
        {/* Zone 1: Naila Wordmark */}
        <Link
          to="/"
          className="font-serif text-[30px] font-medium leading-none tracking-[-0.025em] text-[#251d1b] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#644e43]"
        >
          Naila
        </Link>

        {/* Zone 2: Horizontal Navigation Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[14px] font-normal tracking-[-0.02em] text-[#251d1b] whitespace-nowrap shrink-0 transition-opacity hover:opacity-75 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#644e43]"
          >
            Naila
          </Link>
          {NAV_LINKS.map((link) => {
            const active = !isHome && location.pathname.startsWith(link.to);
            return (
              <button
                key={link.to}
                type="button"
                onClick={() => handleNavClick(link.to, link.homeHash)}
                className={`text-[14px] font-normal tracking-[-0.02em] whitespace-nowrap shrink-0 transition-opacity underline-offset-4 hover:opacity-75 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#644e43] ${
                  active ? 'text-[#251d1b] underline font-medium' : 'text-[#251d1b]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Booking Action (+ Mobile Menu Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          <StudioButton to="/book-appointment" className="px-4 py-2 text-[13px] sm:text-[14px]">
            Book a visit
          </StudioButton>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[6px] text-[#251d1b] hover:bg-[#efe8df]/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-x-0 top-[76px] bottom-0 z-50 bg-[#f8f5ef] border-t border-[#e6dbcf] px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[#e6dbcf]">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-4 font-serif text-[26px] font-medium tracking-[-0.025em] text-[#251d1b]"
            >
              Naila
            </Link>
            {NAV_LINKS.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => handleNavClick(link.to, link.homeHash)}
                className="py-4 text-left font-serif text-[26px] font-medium tracking-[-0.025em] text-[#544a45] hover:text-[#251d1b] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/faq"
              onClick={() => setMobileOpen(false)}
              className="py-4 font-serif text-[26px] font-medium tracking-[-0.025em] text-[#544a45] hover:text-[#251d1b] transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-4 font-serif text-[26px] font-medium tracking-[-0.025em] text-[#544a45] hover:text-[#251d1b] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-8 pb-4 space-y-4 border-t border-[#e6dbcf]">
            <p className="text-[13px] text-[#5e514b]">
              Thoughtful care · Refined finishes · Your style
            </p>
            <StudioButton
              to="/book-appointment"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3"
            >
              Book Appointment
            </StudioButton>
          </div>
        </div>
      )}
    </header>
  );
}
