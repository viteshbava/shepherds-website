'use client';

import About from './components/home/about/About';
import Contact from './components/home/contact/Contact';
import Hero from './components/home/hero/Hero';
import BackgroundImages from './components/home/BackgroundImages';
import Music from './components/home/Music';

export default function Home() {
  return (
    <>
      <h1 className='sr-only'>Shepherds of Cassini - Home</h1>
      <BackgroundImages />
      <Hero />
      <Music />
      <About />
      <Contact />
    </>
  );
}
