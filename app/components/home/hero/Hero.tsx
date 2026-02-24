import React from 'react';
import styles from './Hero.module.scss';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
import heresyData from '@/app/data/music/heresy';
import { redVeilData } from '@/app/data/redVeilData';
import { defaultData } from '@/app/data/defaultHeroData';
import { getGalleryImages } from '@/app/libs/getGalleryImages';
import HeroImages from './HeroImages';
import BandcampPlayer from '../../BandcampPlayer';
import { getReleaseState } from '@/app/libs/getReleaseState';
import BlurImage from '../../BlurImage';
import { HeroLinks, IconNames } from '@/app/types';
import Icon from '../../icon/Icon';

const releaseState = getReleaseState();

let subHeading = 'Listen | Purchase';
let images = getGalleryImages({ folderPath: '/imgs/hero-imgs' }).map((img) => img.url);
let data: HeroLinks = defaultData;

if (releaseState === 'single-released') {
  subHeading = 'New single streaming now';
  images = getGalleryImages({ folderPath: '/imgs/hero-single-released' }).map((img) => img.url);
  data = redVeilData;
}
if (releaseState === 'album-released') {
  subHeading = 'New album streaming now';
  images = getGalleryImages({ folderPath: '/imgs/hero-album-released' }).map((img) => img.url);
  data = heresyData;
}

const Hero = () => {
  return (
    <Section id='hero' className={`${styles['hero-height']} justify-center gap-4 sm:gap-6`}>
      <div className='flex flex-col h-full flex-grow sm:flex-none sm:grid sm:grid-cols-2 gap-2 sm:gap-6 md:gap-12 items-center pb-4'>
        <div className='w-full h-full'>
          <HeroImages images={images} altText='Shepherds of Cassini album artwork' />
        </div>
        <div className='w-full grid grid-cols-1 gap-8'>
          <div className='flex flex-col justify-center'>
            <div>
              {releaseState === 'single-released' && (
                <h2 className='red-veil text-2xl md:text-3xl font-bold'>Red Veil</h2>
              )}
              {releaseState === 'album-released' && (
                <div className='relative mx-auto max-w-[350px] h-[80px]'>
                  <BlurImage
                    src='/imgs/heresy/album-logo.webp'
                    alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
                    className='object-contain'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
                  />
                </div>
              )}
              <h3 className='text-lg sm:text-xl mb-2 sm:mb-3 gold-heading'>{subHeading}</h3>
              <BandcampPlayer albumId={data.bandCampId} trackId={data.trackId} />
            </div>
            <div className='grid grid-cols-2 gap-3 mt-4'>
              {data.listenLinks.map((link, i) => (
                <ButtonLink
                  key={i}
                  isExternal={link.icon !== IconNames.ShoppingCart}
                  href={link.href}
                  ariaLabel={link.ariaLabel}
                  icon={link.icon}
                  className={`w-full bg-red_dim uppercase text-sm`}>
                  {/* className={`w-full bg-red_dim uppercase text-sm ${i === 0 ? 'col-span-2' : ''}`}> */}
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
