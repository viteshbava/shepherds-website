import React from 'react';
import styles from './styles.module.scss';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
// import data from '@/app/data/music/heresy';
import { defaultListenLinks, bandCampId } from '@/app/data/defaultHeroData';
import { getGalleryImages } from '@/app/libs/getGalleryImages';
import MainImages from './HeroImages';
import BandcampPlayer from '../../BandcampPlayer';
import { getReleaseState } from '@/app/libs/getReleaseState';

const Hero = () => {
  const images = getGalleryImages({ folderPath: '/imgs/hero-imgs' });
  // images.unshift(data.frontCover.url);

  const releaseState = getReleaseState();

  if (releaseState === 'pre-single') {
  }

  // <p className='red-veil text-2xl md:text-3xl font-bold mt-8 mb-2'>Red Veil</p>
  // <p className='gold-statement'>New Single 24 January 2025</p>

  return (
    <Section id='hero' className={`${styles['hero-height']} items-center border border-red-500`}>
      <p className='red-veil text-2xl md:text-3xl font-bold mt-8 mb-2'>Red Veil</p>
      <p className='gold-statement'>New Single 24 January 2025</p>
      <div className='flex flex-col justify-center h-full w-full sm:h-auto sm:grid sm:grid-cols-2 sm:gap-x-10 lg:gap-x-20 border border-blue-400'>
        <div className='flex flex-shrink-1 justify-center min-h-0 max-w-full max-h-full aspect-square sm:items-start'>
          <MainImages images={images} altText='Shepherds of Cassini album artwork' />
        </div>
        <div className='w-full flex flex-col justify-center mb-4'>
          <h3 className='text-lg sm:text-xl mt-4 sm:mt-6 mb-3 gold-heading'>Listen | Purchase</h3>
          <BandcampPlayer albumId={bandCampId} />
          <div className='grid grid-cols-2 gap-3 mt-4'>
            {defaultListenLinks.map((link, i) => (
              <ButtonLink
                key={i}
                isExternal
                href={link.href}
                ariaLabel={link.ariaLabel}
                icon={link.icon}
                className={`w-full bg-red_dim uppercase text-sm ${i === 0 ? 'col-span-2' : ''}`}>
                <span className='whitespace-nowrap'>
                  <span className='font-bold'>{link.label}</span>
                  {link.secondaryLabel && ` | ${link.secondaryLabel}`}
                </span>
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
