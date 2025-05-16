import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Koderi — веб-студія',
  description: 'Молода команда розробників, яка створює сайти та веб-застосунки з душею. Koderi — code with character.',
  keywords: ['Koderi', 'веб-студія', 'розробка сайтів', 'Next.js', 'UI/UX', 'дизайн', 'pet-проєкт', 'розробники Україна'],
  openGraph: {
    title: 'Koderi — веб-студія',
    description: 'Молода команда розробників, яка створює сайти та веб-застосунки з душею.',
    url: 'https://anton-kulchytskyi.github.io/koderi/', // замінити на реальну адресу
    siteName: 'Koderi',
    images: [
      {
        url: 'https://anton-kulchytskyi.github.io/koderi/og.png',
        width: 1200,
        height: 630,
        alt: 'Koderi — code with character',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koderi — веб-студія',
    description: 'Ми створюємо веб-рішення з любов’ю до коду та дизайну.',
    images: ['https://anton-kulchytskyi.github.io/koderi/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
