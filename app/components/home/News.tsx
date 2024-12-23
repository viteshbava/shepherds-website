import React from 'react';
import Section from '../ui/Section';
import Image from 'next/image';
import Link from 'next/link';

const News = () => {
  return (
    <Section id='news' className='mt-24'>
      <h2 className='gold-heading bold text-4xl mb-6 pb-2 w-full border-white/50 border-b-[1px]'>
        News
      </h2>
      <div className='relative w-full max-w-[500px] aspect-square mx-auto'>
        <Image
          src='/imgs/heresy/heresy-front-cover.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album cover'
          className='object-cover rounded'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <div className='relative w-full max-w-[500px] h-[100px] mx-auto my-0 md:my-4'>
        <Image
          src='/imgs/heresy/album-logo.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
          className='object-contain'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <div className='flex flex-col items-center max-w-xl mx-auto'>
        <p className=''>
          We&apos;re thrilled to reveal the name and cover of our new album:{' '}
          <span className='italic'>In Thrall to Heresy</span>.
        </p>
        <p className='mt-6'>
          <span className='text-red_bright'>Recorded & mixed by</span>{' '}
          <Link className='link' target='_blank' href='https://daverhodesproductions.com/'>
            Dave Rhodes
          </Link>
          <br></br>
          <span className='text-red_bright'>Mastered by</span> Luke Finlay at{' '}
          <Link className='link' target='_blank' href='https://www.primalmastering.com/'>
            Primal Mastering
          </Link>
          <br></br>
          <span className='text-red_bright'>Original artwork and lettering by</span>{' '}
          <Link className='link' target='_blank' href='https://www.moonrootart.com/'>
            Moonroot
          </Link>
        </p>
        <p className='mt-6'>
          More details coming soon - keep an eye out here or follow us on social media for updates.
          Looking forward to sharing new music with the world again!
        </p>
      </div>
    </Section>
  );
};

export default News;
