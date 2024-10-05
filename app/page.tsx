'use client';

import About from './components/home/About';
import Contact from './components/home/Contact';
import Hero from './components/home/hero/Hero';
import Music from './components/home/Music';

export default function Home() {
  return (
    <>
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
