import { NextResponse } from "next/server";

// Note: For production, move these to env vars
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8292170550:AAGzWOoGRYzQX0E4sx3_6lbv7f_r0Ez3gRQ";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-1002730492752";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      phone,
      email,
      company,
      position,
      orgType,
      desktopDevices,
      serverDevices,
      mobileDevices,
      message,
      calculator,
    } = data || {};

    const orgTypeMap: Record<string, string> = {
      corporate: "Бизнес",
      government: "Госорган",
      "non-profit": "НКО",
    };

    const calcText = calculator
      ? `\n\nКалькулятор: ${calculator?.planName || "—"}\nУзлов: ${calculator?.devices || "—"}\nСрок: ${calculator?.months || "—"} мес.`
      : "";

    const text = [
      "Новая заявка с сайта",
      "",
      `Имя: ${name || "—"}`,
      `Телефон: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      `Компания: ${company || "—"}`,
      `Должность: ${position || "—"}`,
      `Тип организации: ${orgTypeMap[orgType] || orgType || "—"}`,
      `Рабочие станции: ${desktopDevices || "—"}`,
      `Серверы: ${serverDevices || "—"}`,
      `Мобильные устройства: ${mobileDevices || "—"}`,
      "",
      `Сообщение: ${message || "—"}`,
    ].join("\n") + calcText;

    const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ ok: false, error: "telegram_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("API error:", e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

