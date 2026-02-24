import React from 'react';
import BlurImage from '../../BlurImage';
import Link from 'next/link';
import VideoEmbed from '../../VideoEmbed';

const AlbumRelease = () => {
  return (
    <>
      <div className='relative w-full max-w-[500px] h-[100px] mx-auto mb-0 md:mb-4'>
        <BlurImage
          src='/imgs/heresy/album-logo.webp'
          alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
          className='object-contain'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <p className='text-lg sm:text-2xl mb-2 sm:mb-8 gold-heading'>New album streaming now</p>
      <VideoEmbed title='Red Veil' url='https://youtu.be/mE1xsRpZFqQ' />
      <div className='flex flex-col items-center max-w-xl mx-auto mt-8'>
        <div className='sm:flex gap-6'>
          <div className='relative aspect-square w-[200px] mx-auto mt-4'>
            <BlurImage
              src='/imgs/heresy/placeholder-vinyl.webp'
              alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
              className='object-contain'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
            />
          </div>
          <div className='relative aspect-square w-[200px] mx-auto mt-4'>
            <BlurImage
              src='/imgs/heresy/placeholder-cd.webp'
              alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
              className='object-contain'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
            />
          </div>
        </div>
        <p className='text-lg sm:text-2xl mt-4 sm:mb-3 gold-heading'>
          digital | double lp vinyl | cd
        </p>
        <p className='mt-6'>
          Our new album, <span className='italic'>In Thrall to Heresy</span>, is officially out and
          available on vinyl, CD, and digital! You can stream it now on all major platforms or order
          your physical copy on Double LP Vinyl or CD. For details on how to order physical copies,
          click{' '}
          <Link className='link' href='/purchase'>
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
          Thank you for your support — we’re beyond excited to finally share this music with you!
        </p>
      </div>
    </>
  );
};

export default AlbumRelease;
