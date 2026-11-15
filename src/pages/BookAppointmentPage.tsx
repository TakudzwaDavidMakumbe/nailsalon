import { useSearchParams, Link } from 'react-router-dom';
import { DocumentMeta } from '../components/DocumentMeta';
import { BookingForm } from '../components/BookingForm';

export function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') ?? '';
  const initialInspiration = searchParams.get('inspiration') ?? '';

  return (
    <>
      <DocumentMeta
        title="Book Appointment — Naila Nail Studio"
        description="Request your personal nail care appointment at Naila. Choose your service, preferred date and time, and share inspiration references."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Guidance Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
                BOOK APPOINTMENT
              </p>
              <h1 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.08] tracking-[-0.04em] text-[#251d1b]">
                Reserve time for your nails.
              </h1>
              <p className="text-[16px] leading-[1.65] text-[#544a45]">
                Choose your service, share your preferred date and time window, and let us know if
                you have any existing gel or extensions to remove.
              </p>
            </div>

            <div className="bg-[#efe8df] rounded-[16px] p-6 sm:p-7 space-y-4 border border-[#e6dbcf]">
              <h2 className="font-serif text-[24px] font-medium tracking-[-0.02em] text-[#251d1b]">
                Preparing your request
              </h2>
              <ul className="space-y-2.5 text-[14px] leading-[1.6] text-[#544a45]">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#644e43]">
                    •
                  </span>
                  <span>
                    Mention existing gel polish or extensions in your notes so we plan removal
                    safely.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#644e43]">
                    •
                  </span>
                  <span>
                    Attach a reference image if you have bespoke nail art or a specific shade in
                    mind.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#644e43]">
                    •
                  </span>
                  <span>
                    Unsure which service fits best? Read our{' '}
                    <Link to="/faq" className="text-[#251d1b] underline underline-offset-4">
                      before your appointment FAQ
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm
              initialService={initialService}
              initialInspiration={initialInspiration}
            />
          </div>
        </div>
      </section>
    </>
  );
}
