import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moiglaza.uz"),

  title: {
    default: "MoiGlaza.uz — понятно о катаракте, зрении и интраокулярных линзах",
    template: "%s — MoiGlaza.uz"
  },

  description:
    "Информация для пациентов о катаракте, ухудшении зрения после 40 лет, современных интраокулярных линзах и подготовке к консультации с врачом.",

  applicationName: "MoiGlaza.uz",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://moiglaza.uz/ru",
    siteName: "MoiGlaza.uz",
    title: "MoiGlaza.uz — понятно о катаракте, зрении и интраокулярных линзах",
    description:
      "Информация для пациентов о катаракте, современных интраокулярных линзах и подготовке к консультации с врачом.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "MoiGlaza.uz"
      }
    ]
  },

  twitter: {
    card: "summary",
    title: "MoiGlaza.uz — понятно о катаракте, зрении и интраокулярных линзах",
    description:
      "Информация для пациентов о катаракте, современных интраокулярных линзах и подготовке к консультации с врачом.",
    images: ["/icon.png"]
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),
                a=e.getElementsByTagName(t)[0],
                k.async=1,
                k.src=r,
                a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=108973276", "ym");

              ym(108973276, "init", {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce: true,
                trackLinks: true
              });
            `
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108973276"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}
