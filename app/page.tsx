import type { Metadata } from 'next';
import About from './components/home/about/About';
import BackgroundImage from './components/BackgroundImage';
import Contact from './components/home/contact/Contact';
import Music from './components/home/Music';
import { getGalleryImages } from './libs/getGalleryImages';
import Clouds from './components/clouds/Clouds';
import { Theme } from './types';
import Hero from './components/home/hero/Hero';
import News from './components/home/news/News';
import ScrollReveal from './components/ui/ScrollReveal';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const images = getGalleryImages({ folderPath: '/imgs/gallery', shuffle: true });

  return (
    <>
      <h1 className='sr-only'>Shepherds of Cassini - Home</h1>
      {/* <Clouds theme={Theme.Grey} behindBackgroundImg={false} /> */}
      <BackgroundImage
        url='/imgs/home-background.webp'
        animation='home-1'
        altText='In Thrall to Heresy back cover'
        finalOpacity={1}
      />
      <Hero />
      <ScrollReveal className='w-full flex flex-col items-center'>
        <News />
      </ScrollReveal>
      <ScrollReveal className='w-full flex flex-col items-center'>
        <Music />
      </ScrollReveal>
      <ScrollReveal className='w-full flex flex-col items-center'>
        <About />
      </ScrollReveal>
      <ScrollReveal className='w-full flex flex-col items-center'>
        <Contact images={images} />
      </ScrollReveal>
    </>
  );
}
