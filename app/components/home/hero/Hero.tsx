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
import Image from 'next/image';

const releaseState = getReleaseState();

const Hero = () => {
  let images = getGalleryImages({ folderPath: '/imgs/hero-imgs' });
  if (releaseState === 'single-released') {
    images = getGalleryImages({ folderPath: '/imgs/hero-single-released' });
  }
  // images.unshift(data.frontCover.url);

  return (
    <Section id='hero' className={`${styles['hero-height']} justify-center gap-4 sm:gap-6`}>
      <div className='flex flex-col h-full flex-grow sm:flex-none sm:grid sm:grid-cols-2 gap-2 sm:gap-6 md:gap-12 items-center pb-4'>
        <div className='w-full h-full'>
          <HeroImages images={images} altText='Shepherds of Cassini album artwork' />
        </div>
        <div className='w-full grid grid-cols-1 gap-8'>
          <div className='flex flex-col justify-center'>
            <div>
              {/* <h2 className='red-veil text-2xl md:text-3xl font-bold'>Red Veil</h2> */}
              <div className='relative mx-auto max-w-[350px] h-[80px]'>
                <Image
                  src='/imgs/heresy/album-logo.png'
                  alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
                  className='object-contain'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
                />
              </div>
              <h3 className='text-lg sm:text-xl mb-2 sm:mb-3 gold-heading'>
                New single streaming now
              </h3>
              <BandcampPlayer albumId={bandCampId} />
            </div>
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
      </div>
    </Section>
  );
};

export default Hero;
