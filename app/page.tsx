import BasicInfo from './components/BasicInfo';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <section className='max-w-screen-lg w-screen mx-auto'>
        <Hero />
        <BasicInfo />
      </section>
    </>
  );
}
