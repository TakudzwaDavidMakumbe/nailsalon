import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, ImagePlus, Loader2, X } from 'lucide-react';
import { NAIL_SERVICES } from '../data/services';
import { StudioButton } from './Button';

interface BookingFormProps {
  initialService?: string;
  initialInspiration?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  nailShape: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  file?: string;
}

const TIME_WINDOWS = [
  'Morning (10:00 – 12:00)',
  'Early Afternoon (12:00 – 15:00)',
  'Late Afternoon (15:00 – 18:00)',
  'Early Evening (18:00 – 19:30)',
];

const NAIL_SHAPES = [
  'Natural Short Round',
  'Soft Oval',
  'Almond',
  'Squoval',
  'Short Square',
  'Unsure — advise during consultation',
];

export function BookingForm({ initialService = '', initialInspiration = '' }: BookingFormProps) {
  const matchedService =
    NAIL_SERVICES.find(
      (s) => s.slug === initialService || s.title.toLowerCase() === initialService.toLowerCase(),
    )?.title ?? '';

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    service: matchedService,
    preferredDate: '',
    preferredTime: '',
    nailShape: '',
    notes: initialInspiration ? `Inspired by portfolio look: ${initialInspiration}.` : '',
  });

  const [inspirationFile, setInspirationFile] = useState<{ name: string; previewUrl: string } | null>(
    null,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState<FormState | null>(null);

  const todayIso = new Date().toISOString().split('T')[0];

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      next.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a reachable phone number.';
    }
    if (!form.service) {
      next.service = 'Please select a nail service.';
    }
    if (!form.preferredDate) {
      next.preferredDate = 'Please choose a preferred date.';
    } else if (form.preferredDate < todayIso) {
      next.preferredDate = 'Preferred date cannot be in the past.';
    }
    if (!form.preferredTime) {
      next.preferredTime = 'Please choose a preferred time window.';
    }
    return next;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        file: 'Please upload a JPG, PNG, or WebP image file.',
      }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        file: 'Image size must be 5 MB or smaller.',
      }));
      return;
    }

    setErrors((prev) => ({ ...prev, file: undefined }));
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setInspirationFile({ name: file.name, previewUrl: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRequest(form);
    }, 650);
  };

  const resetForm = () => {
    setSubmittedRequest(null);
    setForm({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      nailShape: '',
      notes: '',
    });
    setInspirationFile(null);
    setErrors({});
  };

  if (submittedRequest) {
    return (
      <div
        role="status"
        className="bg-[#efe8df] rounded-[16px] border border-[#e6dbcf] p-8 sm:p-10 space-y-6"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-[#644e43] shrink-0 mt-1" aria-hidden="true" />
          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5e514b]">
              Demonstration Request Prepared
            </p>
            <h2 className="font-serif text-[30px] font-medium tracking-[-0.025em] text-[#251d1b]">
              Thank you, {submittedRequest.fullName}.
            </h2>
            <p className="text-[15px] leading-[1.65] text-[#544a45]">
              Your appointment enquiry has been validated in this studio preview. Because no live
              booking server is connected in this demonstration environment, this does not create a
              confirmed studio reservation—please connect your scheduling endpoint before launch.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e6dbcf] text-[14px]">
          <div>
            <dt className="text-[#5e514b] text-[12px] uppercase tracking-[0.06em]">Service</dt>
            <dd className="text-[#251d1b] font-medium mt-1">{submittedRequest.service}</dd>
          </div>
          <div>
            <dt className="text-[#5e514b] text-[12px] uppercase tracking-[0.06em]">
              Preferred Date & Time
            </dt>
            <dd className="text-[#251d1b] font-medium mt-1 tabular-nums">
              {submittedRequest.preferredDate} · {submittedRequest.preferredTime}
            </dd>
          </div>
          {submittedRequest.nailShape && (
            <div>
              <dt className="text-[#5e514b] text-[12px] uppercase tracking-[0.06em]">
                Preferred Shape
              </dt>
              <dd className="text-[#251d1b] font-medium mt-1">{submittedRequest.nailShape}</dd>
            </div>
          )}
          <div>
            <dt className="text-[#5e514b] text-[12px] uppercase tracking-[0.06em]">Contact</dt>
            <dd className="text-[#251d1b] font-medium mt-1">
              {submittedRequest.email} · {submittedRequest.phone}
            </dd>
          </div>
        </dl>

        <div className="pt-2">
          <StudioButton variant="secondary" onClick={resetForm}>
            Prepare another request
          </StudioButton>
        </div>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-[8px] border border-[#baa99c]/70 bg-[#f8f5ef] px-4 py-3 text-[15px] text-[#251d1b] placeholder:text-[#5e514b]/70 transition-colors focus:border-[#644e43] focus:outline-none focus:ring-2 focus:ring-[#644e43]/20';
  const labelClass = 'block text-[13px] font-medium text-[#251d1b] mb-2';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#efe8df] rounded-[16px] border border-[#e6dbcf] p-6 sm:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="booking-full-name" className={labelClass}>
            Full Name <span className="text-[#793d43]">*</span>
          </label>
          <input
            id="booking-full-name"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="booking-email" className={labelClass}>
            Email Address <span className="text-[#793d43]">*</span>
          </label>
          <input
            id="booking-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className={inputClass}
          />
          {errors.email && <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="booking-phone" className={labelClass}>
            Phone Number <span className="text-[#793d43]">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Your contact number"
            className={inputClass}
          />
          {errors.phone && <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="booking-service" className={labelClass}>
            Select Service <span className="text-[#793d43]">*</span>
          </label>
          <select
            id="booking-service"
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass}
          >
            <option value="">Choose a service</option>
            {NAIL_SERVICES.map((svc) => (
              <option key={svc.slug} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.service}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="booking-date" className={labelClass}>
            Preferred Date <span className="text-[#793d43]">*</span>
          </label>
          <input
            id="booking-date"
            type="date"
            min={todayIso}
            required
            value={form.preferredDate}
            onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            className={inputClass}
          />
          {errors.preferredDate && (
            <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.preferredDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="booking-time" className={labelClass}>
            Preferred Time <span className="text-[#793d43]">*</span>
          </label>
          <select
            id="booking-time"
            required
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            className={inputClass}
          >
            <option value="">Select a time window</option>
            {TIME_WINDOWS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.preferredTime}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="booking-shape" className={labelClass}>
          Preferred Nail Shape or Style
        </label>
        <select
          id="booking-shape"
          value={form.nailShape}
          onChange={(e) => setForm({ ...form, nailShape: e.target.value })}
          className={inputClass}
        >
          <option value="">Optional — select a preferred shape</option>
          {NAIL_SHAPES.map((shape) => (
            <option key={shape} value={shape}>
              {shape}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="booking-notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea
          id="booking-notes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Let us know if you currently have gel or extensions to remove, or share colour preferences."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="booking-inspiration" className={labelClass}>
          Optional Nail Inspiration Image
        </label>

        {!inspirationFile ? (
          <label
            htmlFor="booking-inspiration"
            className="flex flex-col items-center justify-center gap-2 rounded-[8px] border border-dashed border-[#baa99c] bg-[#f8f5ef]/70 px-4 py-6 text-center cursor-pointer hover:bg-[#f8f5ef] transition-colors"
          >
            <ImagePlus className="w-5 h-5 text-[#644e43]" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-[14px] text-[#251d1b] font-medium">
              Upload a reference photo
            </span>
            <span className="text-[12px] text-[#5e514b]">
              JPG, PNG, or WebP up to 5 MB
            </span>
            <input
              id="booking-inspiration"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between gap-4 rounded-[8px] border border-[#e6dbcf] bg-[#f8f5ef] p-3">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={inspirationFile.previewUrl}
                alt="Uploaded nail inspiration preview"
                className="w-14 h-14 rounded-[6px] object-cover shrink-0"
              />
              <span className="text-[14px] text-[#251d1b] truncate">{inspirationFile.name}</span>
            </div>
            <button
              type="button"
              onClick={() => setInspirationFile(null)}
              aria-label="Remove uploaded image"
              className="p-2 text-[#544a45] hover:text-[#251d1b] rounded-[6px] hover:bg-[#efe8df]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {errors.file && <p className="mt-1.5 text-[13px] text-[#793d43]">{errors.file}</p>}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <StudioButton type="submit" disabled={isSubmitting} className="px-7 py-3 uppercase text-[12px] tracking-[0.08em]">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
              <span>Preparing request...</span>
            </>
          ) : (
            'Request Appointment'
          )}
        </StudioButton>

        <p className="text-[13px] text-[#5e514b]">
          Requests are reviewed personally by the studio.
        </p>
      </div>
    </form>
  );
}
