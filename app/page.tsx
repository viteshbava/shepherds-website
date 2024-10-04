'use client';

import About from './components/home/About';
import Contact from './components/home/Contact';
import Hero from './components/home/Hero';
import Music from './components/home/Music';

export default function Home() {
  return (
    <section className='flex flex-col grow items-center h-full text-center pt-6'>
      <Hero />
      <Music />
      <About />
      <Contact />
    </section>
  );
}
