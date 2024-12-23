import type { Metadata } from 'next';
import { Archivo_Narrow, Cormorant_Upright } from 'next/font/google';
import './globals.scss';
import Footer from './components/footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from './components/header/Header';
import PasswordWrapper from './components/PasswordWrapper';
import LoadSection from './components/LoadSection';

const baseFont = Archivo_Narrow({ subsets: ['latin'], weight: ['400', '700'] });

const cormorantUpright = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant-upright',
});

export const metadata: Metadata = {
  title: 'Shepherds of Cassini',
  description:
    'Psychedelic prog metal from Auckland, New Zealand. Shepherds Of Cassini is Omar Al-Hashimi – Drums, Vitesh Bava – Bass, Felix Lun – Violin, Brendan Zwaan – Guitar, Vocals, Keys',
  keywords:
    'shepherds of cassini new zealand music rock metal progressive post prog psychedelic auckland',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
};

const hardcodedPassword = 'abyss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' lang='en' style={{ scrollBehavior: 'smooth' }}>
      <body
        suppressHydrationWarning={true}
        className={`${baseFont.className} ${cormorantUpright.variable} bg-black text-shepherds_white flex flex-col items-center`}>
        <PasswordWrapper password={hardcodedPassword}>
          <LoadSection />
          <Header />
          <main className='relative w-full flex flex-col grow items-center min-h-full text-center'>
            {children}
          </main>
          <Footer />
        </PasswordWrapper>
      </body>
      <GoogleAnalytics gaId='G-L7J30WL4PG' />
    </html>
  );
}
