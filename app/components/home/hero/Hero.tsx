import React from 'react';
import styles from './Hero.module.scss';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
// import data from '@/app/data/music/heresy';
import { defaultListenLinks, bandCampId } from '@/app/data/defaultHeroData';
import { getGalleryImages } from '@/app/libs/getGalleryImages';
import HeroImages from './HeroImages';
import BandcampPlayer from '../../BandcampPlayer';
import { getReleaseState } from '@/app/libs/getReleaseState';

const releaseState = getReleaseState();

const Hero = () => {
  let images = getGalleryImages({ folderPath: '/imgs/hero-imgs' });
  if (releaseState === 'single-released') {
    images = getGalleryImages({ folderPath: '/imgs/hero-single-released' });
  }
  // images.unshift(data.frontCover.url);

  return (
    <Section id='hero' className={`${styles['hero-height']} justify-around`}>
      <div className='flex flex-col justify-center h-full md:h-auto'>
        <div className='sm:col-start-1 sm:col-span-2 mb-2 sm:mb-4'>
          <h2 className='red-veil text-2xl md:text-3xl font-bold mb-2'>Red Veil</h2>
          <p className='gold-statement'>New Single 24 January 2025</p>
        </div>
        <div className='flex flex-col sm:grid grid-cols-2 gap-2 sm:gap-12 flex-grow'>
          <HeroImages images={images} altText='Shepherds of Cassini album artwork' />
          <div className='w-full flex flex-col justify-center'>
            <h3 className='text-lg sm:text-xl mb-3 gold-heading'>Listen | Purchase</h3>
            <BandcampPlayer albumId={bandCampId} />
            <div className='grid grid-cols-2 gap-3 mt-4 mb-4 sm:mb-0'>
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
      </div>
    </Section>
  );
};

export default Hero;
