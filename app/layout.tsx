import type { Metadata } from 'next';
import { Archivo_Narrow, Cormorant_Upright, Jura } from 'next/font/google';
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

const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--jura-upright',
});

export const metadata: Metadata = {
  title: 'Shepherds of Cassini | Official Website',
  description: 'Shepherds of Cassini – psychedelic prog metal from Auckland, New Zealand.',
  keywords:
    'shepherds of cassini new zealand music rock metal progressive post prog psychedelic auckland',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  ...(process.env.IS_PRODUCTION !== 'true' && {
    robots: { index: false, follow: false },
  }),
};

const hardcodedPassword = 'nail';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shepherds of Cassini | Official Website',
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
        className={`${baseFont.className} ${cormorantUpright.variable} ${jura.variable} bg-black text-shepherds_white flex flex-col items-center`}>
        {/* <PasswordWrapper password={hardcodedPassword}> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadSection />
        <Header />
        <main className='relative w-full flex flex-col grow items-center min-h-full text-center'>
          {children}
        </main>
        <Footer />
        {/* </PasswordWrapper> */}
      </body>
      <GoogleAnalytics gaId='G-L7J30WL4PG' />
    </html>
  );
}
