import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { DocumentMeta } from '../components/DocumentMeta';
import { STUDIO_INFO } from '../data/studio';
import { StudioButton } from '../components/Button';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || !message.trim()) {
      setError('Please complete your name, a valid email address, and your message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-[8px] border border-[#baa99c]/70 bg-[#f8f5ef] px-4 py-3 text-[15px] text-[#251d1b] placeholder:text-[#5e514b]/70 transition-colors focus:border-[#644e43] focus:outline-none focus:ring-2 focus:ring-[#644e43]/20';

  return (
    <>
      <DocumentMeta
        title="Contact — Naila Nail Studio"
        description="Get in touch with Naila Nail Studio for service enquiries, design consultations, or appointment scheduling assistance."
      />

      <section className="bg-[#f8f5ef] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1176px] mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Studio Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
                CONTACT
              </p>
              <h1 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.08] tracking-[-0.04em] text-[#251d1b]">
                Speak with the studio.
              </h1>
              <p className="text-[16px] leading-[1.65] text-[#544a45]">
                Have a question about nail preparation, custom nail art references, or choosing the
                right service? Send a note below or proceed directly to request a visit.
              </p>
            </div>

            <div className="space-y-5 pt-2 border-t border-[#e6dbcf]">
              <div className="flex items-start gap-3.5 pt-4">
                <Mail className="w-4 h-4 text-[#644e43] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.08em] text-[#5e514b]">Email</p>
                  <p className="text-[15px] text-[#251d1b] mt-0.5">{STUDIO_INFO.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-[#644e43] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.08em] text-[#5e514b]">Phone</p>
                  <p className="text-[15px] text-[#251d1b] mt-0.5">{STUDIO_INFO.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#644e43] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.08em] text-[#5e514b]">
                    Studio Location
                  </p>
                  <p className="text-[15px] text-[#544a45] mt-0.5">
                    {STUDIO_INFO.contact.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-4 h-4 text-[#644e43] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.08em] text-[#5e514b]">
                    Opening Hours
                  </p>
                  <p className="text-[15px] text-[#544a45] mt-0.5">{STUDIO_INFO.contact.hours}</p>
                </div>
              </div>
            </div>

            <div>
              <StudioButton to="/book-appointment" variant="secondary">
                Request an appointment
              </StudioButton>
            </div>
          </div>

          {/* Contact Enquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                role="status"
                className="bg-[#efe8df] rounded-[16px] border border-[#e6dbcf] p-8 sm:p-10 space-y-5"
              >
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-[#644e43] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-2">
                    <h2 className="font-serif text-[28px] font-medium text-[#251d1b]">
                      Message prepared, {name}.
                    </h2>
                    <p className="text-[15px] leading-[1.65] text-[#544a45]">
                      This preview demonstrates the studio enquiry form. Connect your email or CRM
                      handler before launch to route live studio messages.
                    </p>
                  </div>
                </div>
                <StudioButton
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                >
                  Send another note
                </StudioButton>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#efe8df] rounded-[16px] border border-[#e6dbcf] p-6 sm:p-10 space-y-6"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-[13px] font-medium text-[#251d1b] mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[13px] font-medium text-[#251d1b] mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[13px] font-medium text-[#251d1b] mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your nail goals or question..."
                    className={inputClass}
                  />
                </div>

                {error && <p className="text-[13px] text-[#793d43]">{error}</p>}

                <StudioButton type="submit" className="px-7 py-3">
                  Send Enquiry
                </StudioButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
