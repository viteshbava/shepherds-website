import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
import data from '@/app/data/music/heliosForsaken';

const Hero = () => {
  return (
    <Section id='hero' className={`${styles['hero-height']} items-center`}>
      <div className='grid grid-cols-2 gap-20 w-full'>
        <div className='w-full'>
          <Image
            priority
            layout='responsive'
            src={data.frontCover}
            alt='In Thrall to Heresy album cover featuring [describe the cover image briefly]'
            className='w-full aspect-square object-cover'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full'>
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
              <iframe className='border-0 w-full h-full' src={data.embedLink} seamless></iframe>
            </div>
            <div className='flex flex-col space-y-4 mt-4'>
              {data.listenLinks.map((link, i) => (
                <ButtonLink
                  key={i}
                  isExternal
                  href={link.href}
                  ariaLabel={link.ariaLabel}
                  className='w-full bg-red_dim uppercase text-sm'>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
