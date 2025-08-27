import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToastProvider } from "@/components/ui/toast";

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
        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103917430', 'ym');

          ym(103917430, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', accurateTrackBounce: true, trackLinks: true });
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://mc.yandex.ru/watch/103917430" style={{ position: "absolute", left: -9999 }} alt="" />
          </div>
        </noscript>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
