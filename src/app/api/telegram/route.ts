import { NextRequest } from 'next/server'
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '@/config/integrations'

function formatMessage({ name, contact, message, page }: { name?: string; contact: string; message?: string; page?: string }) {
  const lines = [
    '🟢 Новый запрос с сайта drweb.gundyrev.com',
    name ? `👤 Имя: ${name}` : undefined,
    `📞 Контакт: ${contact}`,
    message ? `💬 Вопрос: ${message}` : undefined,
    page ? `🔗 Страница: ${page}` : undefined,
    `⏱ Время: ${new Date().toLocaleString('ru-RU')}`,
  ].filter(Boolean)
  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  try {
    const { name, contact, message, page } = await req.json().catch(() => ({}))

    if (!contact || typeof contact !== 'string' || contact.trim().length < 3) {
      return new Response(JSON.stringify({ error: 'Укажите корректный контакт (Telegram или телефон).' }), { status: 400 })
    }

    const token = TELEGRAM_BOT_TOKEN
    const chatId = TELEGRAM_CHAT_ID
    if (!token || !chatId) {
      return new Response(JSON.stringify({ error: 'Сервис временно недоступен (нет конфигурации).' }), { status: 503 })
    }

    const text = formatMessage({ name, contact, message, page })
    const url = `https://api.telegram.org/bot${token}/sendMessage`

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true }),
      // Enforce server-side fetch
      cache: 'no-store',
    })

    if (!res.ok) {
      const payload = await res.json().catch(() => ({}))
      console.error('Telegram API error', res.status, payload)
      return new Response(JSON.stringify({ error: 'Не удалось отправить сообщение. Попробуйте позже.' }), { status: 502 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    console.error('Telegram route error', e)
    return new Response(JSON.stringify({ error: 'Внутренняя ошибка' }), { status: 500 })
  }
}
