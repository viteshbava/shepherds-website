import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Clouds from './components/clouds/Clouds';
import { GoogleAnalytics } from '@next/third-parties/google';

const baseFont = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Shepherds of Cassini',
  description:
    'Psychedelic prog metal from Auckland, New Zealand. Shepherds Of Cassini is Omar Al-Hashimi – Drums, Vitesh Bava – Bass, Felix Lun – Violin, Brendan Zwaan – Guitar, Vocals, Keys',
  keywords:
    'shepherds of cassini new zealand music rock metal progressive post prog psychedelic auckland',
  openGraph: {
    images: '/imgs/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`${baseFont.className} bg-shepherds_black text-shepherds_white h-svh min-h-[670px] flex flex-col items-center`}>
        <Clouds />
        <main className='flex-grow w-10/12 md:w-auto'>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-L7J30WL4PG' />
    </html>
  );
}
