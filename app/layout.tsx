
import "./globals.css";

export const metadata = {
  title: "MoiGlaza.uz",
  description: "Сайт для пациентов о катаракте и интраокулярных линзах"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
