import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';

const Hero = () => {
  return (
    <Section id='hero' className={`${styles['hero-height']}`}>
      <div className='grid grid-cols-2 gap-20 w-full border border-green-500'>
        <div className='w-full border border-red-500'>
          <Image
            priority
            layout='responsive'
            src='/imgs/heresy/heresy-front-cover.webp'
            alt='In Thrall to Heresy album cover featuring [describe the cover image briefly]'
            className='w-full aspect-square object-cover'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full border border-red-500'>
          <div>
            <div className='rounded-lg	bg-black/30 py-2'>
              <h2 className='text-3xl text-red_important'>In Thrall to Heresy</h2>
              <p className='text-lg'>New album out now</p>
            </div>
            <p className='mt-4'>
              From upcoming album <span className='text-red_important'>In Thrall to Heresy</span>
            </p>
            <p className='text-red_important'>99 | 99 | 2024</p>
            <h3 className='text-xl mt-6 mb-3 text-red_bright'>Listen | Purchase</h3>
            <div className='w-full h-[120px]'>
              <iframe
                className='border-0 w-full h-full'
                src='https://bandcamp.com/EmbeddedPlayer/album=1464114074/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/'
                seamless></iframe>
            </div>
            <div className='flex flex-col space-y-2 mt-4'>
              <ButtonLink
                href='https://shepherdsofcassini.bandcamp.com/album/helios-forsaken'
                ariaLabel='Listen on Bandcamp'
                className='w-full'>
                Bandcamp
              </ButtonLink>

              <button aria-label='Listen on Spotify' className='btn'>
                Spotify
              </button>
              <button aria-label='Listen on Apple Music' className='btn'>
                Apple
              </button>
              <button aria-label='Watch on YouTube' className='btn'>
                YouTube
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
