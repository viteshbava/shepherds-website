import About from './components/home/about/About';
import BackgroundImage from './components/BackgroundImage';
import Contact from './components/home/contact/Contact';
import Hero from './components/home/hero/Hero';
import Music from './components/home/Music';
import { getGalleryImages } from './libs/getGalleryImages';
import Clouds from './components/clouds/Clouds';
import { Theme } from './types';

export default function Home() {
  const images = getGalleryImages();

  return (
    <>
      <h1 className='sr-only'>Shepherds of Cassini - Home</h1>
      <Clouds theme={Theme.Red} />
      <BackgroundImage
        url='/imgs/heresy/heresy-back-cover.webp'
        altText='In Thrall to Heresy back cover'
      />
      <Hero />
      <Music />
      <About />
      <Contact images={images} />
    </>
  );
}
