import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

const baseFont = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Shepherds of Cassini',
  description:
    'Psyechedlic prog metal from Auckland, New Zealand. Shepherds Of Cassini is Omar Al-Hashimi – Drums, Vitesh Bava – Bass, Felix Lun – Violin, Brendan Zwaan – Guitar, Vocals, Keys',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${baseFont.className} bg-shepherds_black text-shepherds_white h-screen flex flex-col`}>
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
