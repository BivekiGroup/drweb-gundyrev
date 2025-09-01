'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type FormState = {
  name: string
  contact: string
  message: string
}

const STORAGE_KEY = 'inquiryModalDismissedAt'
const HIDE_FOR_HOURS = 24

export default function InquiryModal() {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>({ name: '', contact: '', message: '' })
  const timerRef = useRef<number | null>(null)

  const isDismissed = useMemo(() => {
    if (typeof window === 'undefined') return true
    const ts = window.localStorage.getItem(STORAGE_KEY)
    if (!ts) return false
    const last = Number(ts)
    if (Number.isNaN(last)) return false
    const diffHrs = (Date.now() - last) / (1000 * 60 * 60)
    return diffHrs < HIDE_FOR_HOURS
  }, [])

  useEffect(() => {
    if (isDismissed) return
    timerRef.current = window.setTimeout(() => setOpen(true), 60_000)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [isDismissed])

  const close = useCallback(() => {
    setOpen(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {}
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const payload = {
        name: form.name.trim(),
        contact: form.contact.trim(),
        message: form.message.trim(),
        page: typeof window !== 'undefined' ? window.location.href : undefined,
      }
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || `Ошибка отправки (${res.status})`)
      }
      setSubmitted(true)
      // Hide after a short delay
      setTimeout(() => {
        close()
      }, 2000)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative z-[1001] w-[92%] max-w-md rounded-2xl bg-white p-6 shadow-green-lg animate-slide-in-up">
        <button
          aria-label="Закрыть"
          onClick={close}
          className="absolute right-3 top-3 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Есть вопросы?</h3>
          <p className="mt-1 text-sm text-gray-600">Напишите нам — ответим в Telegram.</p>
        </div>

        {submitted ? (
          <div className="rounded-lg bg-green-50 p-4 text-green-700">Сообщение отправлено! Скоро свяжемся в Telegram.</div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Ваше имя</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="Иван"
              />
            </div>
            <div>
              <label htmlFor="contact" className="mb-1 block text-sm font-medium text-gray-700">Контакт (Telegram/телефон)</label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                value={form.contact}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="@username или +7..."
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Коротко о вопросе</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="Например: нужна лицензия для 15 ПК"
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="drweb-button-primary w-full justify-center text-center disabled:opacity-60"
            >
              {submitting ? 'Отправка…' : 'Отправить в Telegram'}
            </button>
          </form>
        )}

        <p className="mt-3 text-center text-xs text-gray-500">
          Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
        </p>
      </div>
    </div>
  )
}
