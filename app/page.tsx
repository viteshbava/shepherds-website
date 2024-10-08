'use client';

import About from './components/home/About';
import Contact from './components/home/Contact';
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
    // <section className='flex flex-col grow items-center h-full text-center pt-6'>
    //   <Hero />
    //   <Music />
    //   <About />
    //   <Contact />
    // </section>
  );
}
