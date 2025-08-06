import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Dr.Web Антивирус - Гундырев.рф | Надежная защита от вирусов",
  description: "Dr.Web - российский антивирус с 30-летним стажем. Централизованная защита корпоративных сетей, серверов и рабочих станций. Быстрая реакция на новые угрозы. Купить лицензию с доставкой.",
  keywords: "Dr.Web, антивирус, защита от вирусов, корпоративная безопасность, лицензия антивируса, российский антивирус",
  robots: "index, follow",
  openGraph: {
    title: "Dr.Web Антивирус - Гундырев.рф",
    description: "Надежная защита от вирусов и киберугроз. Dr.Web - российский антивирус с 30-летним стажем.",
    type: "website",
    locale: "ru_RU",
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
