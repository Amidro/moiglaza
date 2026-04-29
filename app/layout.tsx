import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
