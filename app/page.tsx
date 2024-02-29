import BasicInfo from './components/BasicInfo';
import Hero from './components/Hero';

export default function Home() {
  return (
    <section className='flex flex-col grow items-center h-full text-center pt-6'>
      <Hero />
      <BasicInfo />
    </section>
  );
}
