import React from 'react';
import BlurImage from '../../BlurImage';
import Link from 'next/link';

const PreSingle = () => {
  return (
    <>
      <div className='relative w-full max-w-[500px] aspect-square mx-auto'>
        <BlurImage
          src='/imgs/heresy/red-veil-cover.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album cover'
          className='object-cover rounded'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <p className='red-veil text-2xl md:text-3xl font-bold mt-8 mb-2'>Red Veil</p>
      <p className='gold-statement'>New Single 24 January 2025</p>
      <div className='relative w-full max-w-[500px] h-[100px] mx-auto mb-0 md:mb-4'>
        <BlurImage
          src='/imgs/heresy/album-logo.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
          className='object-contain'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <div className='flex flex-col items-center max-w-xl mx-auto'>
        <p className='mt-6'>
          <span className='italic'>Red Veil</span>, from our upcoming album{' '}
          <span className='italic'>In Thrall to Heresy</span>, will be released on January 24
          <sup>th</sup>, 2025. We&apos;ll also announce pre-order details for the album which will
          be available on vinyl, CD and digital formats.
        </p>
        <p className='mt-6'>
          You can pre-save the single on your favourite streaming platform{' '}
          <Link className='link' target='_blank' href='https://music.drm.co.nz/redveil-soc'>
            here
          </Link>
          .
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
    </>
  );
};

export default PreSingle;
