// Centralized integrations config (no .env required)
// Fill these with your actual Telegram bot credentials if you want
// form submissions to be delivered automatically.
// WARNING: committing real secrets is insecure; prefer environment vars in production.

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8292170550:AAGzWOoGRYzQX0E4sx3_6lbv7f_r0Ez3gRQ"; // e.g. 123456789:ABC_def...
export const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-1002730492752";   // e.g. 123456789 or -100123456789

