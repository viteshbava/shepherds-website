import About from './components/home/about/About';
import BackgroundImage from './components/BackgroundImage';
import Contact from './components/home/contact/Contact';
import Music from './components/home/Music';
import { getGalleryImages } from './libs/getGalleryImages';
import Clouds from './components/clouds/Clouds';
import { Theme } from './types';
import Hero from './components/home/hero/Hero';
import News from './components/home/News';

export default function Home() {
  const images = getGalleryImages({ folderPath: '/imgs/gallery', shuffle: true });

  return (
    <>
      <h1 className='sr-only'>Shepherds of Cassini - Home</h1>
      {/* <Clouds theme={Theme.Grey} behindBackgroundImg={false} /> */}
      <BackgroundImage
        url='/imgs/home-background.png'
        animation='home-1'
        altText='In Thrall to Heresy back cover'
        finalOpacity={1}
      />
      <Hero />
      <News />
      <Music />
      <About />
      <Contact images={images} />
    </>
  );
}
