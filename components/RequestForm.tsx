'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { BUSINESS } from '@/lib/business'

const SERVICE_OPTIONS = [
  'Emergency leak / burst pipe',
  'Slab leak repair',
  'Water heater replacement',
  'Main line drain clearing',
  'Faucet or toilet install',
  'Something else',
]

const URGENCY_OPTIONS = [
  { value: 'Emergency — as soon as possible', label: 'Emergency', hint: 'Now' },
  { value: 'Today', label: 'Today', hint: 'Same day' },
  { value: 'This week', label: 'This week', hint: 'Schedule it' },
  { value: 'Just a free estimate', label: 'Just a quote', hint: 'Not urgent' },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputClass =
  'w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 py-3 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-royal-700 focus:outline-none focus:ring-2 focus:ring-brass-400/60'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[13px] font-bold uppercase tracking-wide text-royal-900"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default function RequestForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [firstName, setFirstName] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()

    const payload = {
      name,
      phone: String(data.get('phone') ?? '').trim(),
      service: String(data.get('service') ?? ''),
      urgency: String(data.get('urgency') ?? ''),
      details: String(data.get('details') ?? '').trim(),
      page: typeof window !== 'undefined' ? window.location.href : 'website',
      submittedAt: new Date().toISOString(),
    }

    setStatus('sending')

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      } else {
        // No delivery endpoint configured yet — see README ("Wire up the form").
        await new Promise((resolve) => setTimeout(resolve, 350))
      }
      setFirstName(name.split(' ')[0] ?? '')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-card sm:p-7" role="status" aria-live="polite">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-brass-100 text-brass-700">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-black text-royal-950">
          Request received{firstName ? `, ${firstName}` : ''}.
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
          We will call you back as soon as we pick up your request. If water is actively leaking
          right now, do not wait on us — call and we will talk you through shutting it off.
        </p>
        <a
          href={BUSINESS.phoneTel}
          className="btn-brass mt-5 w-full px-4 py-4 text-base sm:text-lg"
        >
          <PhoneGlyph className="h-6 w-6" />
          <span>Call Now: {BUSINESS.phoneDisplay}</span>
        </a>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-3 w-full rounded-xl px-4 py-2 text-sm font-bold text-royal-800 underline decoration-royal-300 underline-offset-4"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-card sm:p-7" id="request-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="pill bg-royal-100 text-royal-800">Takes ~30 seconds</span>
        <span className="pill bg-brass-100 text-brass-800">Free estimate</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              enterKeyHint="next"
              placeholder="First and last"
              className={inputClass}
            />
          </Field>

          <Field label="Best phone number" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              enterKeyHint="next"
              placeholder="(228) 555-0123"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="What do you need?" htmlFor="service">
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose a service…
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <fieldset>
          <legend className="mb-1.5 block text-[13px] font-bold uppercase tracking-wide text-royal-900">
            How urgent is it?
          </legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {URGENCY_OPTIONS.map((option, index) => (
              <label key={option.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  required
                  defaultChecked={index === 0}
                  className="peer sr-only"
                />
                <span className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-slate-200 px-2 py-2.5 text-center text-[13px] font-bold text-slate-700 transition-colors peer-checked:border-royal-700 peer-checked:bg-royal-50 peer-checked:text-royal-900 peer-focus-visible:ring-2 peer-focus-visible:ring-brass-400">
                  <span className="leading-tight">{option.label}</span>
                  <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {option.hint}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Anything else we should know? (optional)" htmlFor="details">
          <textarea
            id="details"
            name="details"
            rows={3}
            placeholder="Where is the water coming from? Is the water shut off yet?"
            className={inputClass}
          />
        </Field>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-brass w-full px-4 py-4 text-base disabled:cursor-wait disabled:opacity-70 sm:text-lg"
        >
          {status === 'sending' ? 'Sending…' : 'Request Service Now'}
        </button>

        {status === 'error' && (
          <p
            className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
            role="alert"
          >
            That did not go through. Please call{' '}
            <a href={BUSINESS.phoneTel} className="underline">
              {BUSINESS.phoneDisplay}
            </a>{' '}
            and we will get you on the schedule.
          </p>
        )}

        <p className="text-center text-[11px] leading-snug text-slate-500">
          No spam, no sales calls. We use your info only to schedule and price your job. Prefer to
          talk?{' '}
          <a href={BUSINESS.phoneTel} className="font-bold text-royal-800 underline">
            {BUSINESS.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  )
}

function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
