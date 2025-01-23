import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VideoEmbed from '../../VideoEmbed';

const SingleRelease = () => {
  return (
    <>
      <p className='red-veil text-2xl md:text-3xl font-bold mt-4 mb-2'>Red Veil</p>
      <p className='gold-statement mb-8'>New single streaming now</p>
      <VideoEmbed title='Red Veil' url='https://youtu.be/kOVeRKH5c2Y?feature=shared' />
      <div className='relative w-full max-w-[500px] h-[80px] sm:h-[100px] mx-auto mt-4'>
        <Image
          src='/imgs/heresy/album-logo.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
          className='object-contain'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <p className='gold-statement'>Out 21 February 2025</p>
      <div className='flex flex-col items-center max-w-xl mx-auto'>
        <p className='mt-8'>
          Our new single, <span className='italic'>Red Veil</span>, from the upcoming album{' '}
          <span className='italic'>In Thrall to Heresy</span>, is now streaming on all major
          platforms! The full album will be released on{' '}
          <span className='font-bold'>
            21<sup>st</sup> February 2025
          </span>{' '}
          and will be available on vinyl, CD, and digital. You can pre-save the digital album{' '}
          <Link className='link' target='_blank' href='https://music.drm.co.nz/itth-soc'>
            here
          </Link>{' '}
          or pre-order a digital download from{' '}
          <Link className='link' target='_blank' href='https://bandcamp.com/'>
            Bandcamp
          </Link>{' '}
          as soon as it&apos;s released.
        </p>

        <p className='mt-6'>
          The album will be available on Double Vinyl and CD. For more information on how to
          pre-order, click{' '}
          <Link className='link' target='_blank' href='https://example.com/preorder'>
            here
          </Link>
          .
        </p>

        <div className='sm:flex gap-6'>
          <div className='relative aspect-square w-[200px] mx-auto mt-4'>
            <Image
              src='/imgs/heresy/placeholder-vinyl.png'
              alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
              className='object-contain'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
            />
          </div>
          <div className='relative aspect-square w-[200px] mx-auto mt-4'>
            <Image
              src='/imgs/heresy/placeholder-cd.png'
              alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
              className='object-contain'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
            />
          </div>
        </div>

        {/* <p className='mt-6'>
          Vinyl and CD pre-orders can be made by contacting the band directly.  Email us at{' '}
          <a className='link' href='mailto:shepherdsofcassini@gmail.com'>
            shepherdsofcassini@gmail.com
          </a>{' '}
          or reach out to any of the band members if you know us.
        </p> */}

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

export default SingleRelease;
