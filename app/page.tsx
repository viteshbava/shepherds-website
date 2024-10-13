import About from './components/home/about/About';
import BackgroundImage from './components/home/BackgroundImage';
import Contact from './components/home/contact/Contact';
import Hero from './components/home/hero/Hero';
import Music from './components/home/Music';
import { getGalleryImages } from './libs/getGalleryImages';

export default function Home() {
  const images = getGalleryImages();

  return (
    <>
      <h1 className='sr-only'>Shepherds of Cassini - Home</h1>
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
