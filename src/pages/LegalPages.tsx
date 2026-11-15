import { Link } from 'react-router-dom';
import { DocumentMeta } from '../components/DocumentMeta';

export function PrivacyPolicyPage() {
  return (
    <>
      <DocumentMeta
        title="Privacy Policy — Naila Nail Studio"
        description="Read how Naila handles appointment request information, uploaded design inspiration images, and studio communication."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[780px] mx-auto px-6 md:px-8 space-y-8">
          <div className="space-y-3 pb-6 border-b border-[#e6dbcf]">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              LEGAL INFORMATION
            </p>
            <h1 className="font-serif text-[40px] sm:text-[52px] font-medium leading-[1.08] tracking-[-0.035em] text-[#251d1b]">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-[#5e514b]">
              Template studio policy · update with your legal entity details prior to launch.
            </p>
          </div>

          <div className="space-y-6 text-[16px] leading-[1.7] text-[#544a45]">
            <div className="space-y-2">
              <h2 className="font-serif text-[26px] font-medium text-[#251d1b]">
                Information you share with us
              </h2>
              <p>
                When you submit an appointment enquiry or contact form, we collect your name, email
                address, phone number, preferred service details, and any optional nail design
                reference image you choose to provide so the studio can respond to your request.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-[26px] font-medium text-[#251d1b]">
                How we use appointment details
              </h2>
              <p>
                Submitted information is used strictly to prepare for your consultation, arrange
                appointment times, and communicate updates regarding your requested nail service.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-[26px] font-medium text-[#251d1b]">
                Questions or updates
              </h2>
              <p>
                To request corrections or removal of your enquiry details, please reach out via our{' '}
                <Link to="/contact" className="text-[#251d1b] underline underline-offset-4">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <DocumentMeta
        title="Terms & Conditions — Naila Nail Studio"
        description="Review general studio appointment request terms, service guidance, and studio care guidelines for Naila."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[780px] mx-auto px-6 md:px-8 space-y-8">
          <div className="space-y-3 pb-6 border-b border-[#e6dbcf]">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              LEGAL INFORMATION
            </p>
            <h1 className="font-serif text-[40px] sm:text-[52px] font-medium leading-[1.08] tracking-[-0.035em] text-[#251d1b]">
              Terms & Conditions
            </h1>
            <p className="text-[14px] text-[#5e514b]">
              Template studio terms · configure specific studio policies prior to launch.
            </p>
          </div>

          <div className="space-y-6 text-[16px] leading-[1.7] text-[#544a45]">
            <div className="space-y-2">
              <h2 className="font-serif text-[26px] font-medium text-[#251d1b]">
                Appointment requests
              </h2>
              <p>
                Submitting the online booking form sends an appointment enquiry to the studio.
                Appointments are only scheduled once confirmed directly with you by the studio.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-[26px] font-medium text-[#251d1b]">
                Existing product & design notes
              </h2>
              <p>
                Please let us know in advance if you currently wear gel polish or nail extensions,
                or if you would like detailed nail art, so appropriate time and preparation can be
                allocated.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-[26px] font-medium text-[#251d1b]">
                Changes to your visit
              </h2>
              <p>
                If you need to reschedule or cancel an appointment, please contact the studio as
                soon as possible via our{' '}
                <Link to="/contact" className="text-[#251d1b] underline underline-offset-4">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
