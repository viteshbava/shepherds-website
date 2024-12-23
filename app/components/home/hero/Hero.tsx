import React from 'react';
import styles from './styles.module.css';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
import data from '@/app/data/music/heresy';
import { getGalleryImages } from '@/app/libs/getGalleryImages';
import MainImages from './HeroImages';

const Hero = () => {
  const images = getGalleryImages({ folderPath: '/imgs/hero-imgs' });
  // images.unshift(data.frontCover.url);

  return (
    <Section id='hero' className={`${styles['hero-height']} items-center`}>
      <div className='flex flex-col justify-center h-full w-full sm:h-auto sm:grid sm:grid-cols-2 sm:gap-x-10 lg:gap-x-20'>
        <div className='flex flex-shrink-1 justify-center min-h-0 max-w-full max-h-full aspect-square sm:items-start'>
          <MainImages images={images} altText={data.frontCover.altText} />
        </div>
        <div className='w-full flex flex-col justify-center mb-4'>
          <h3 className='text-lg sm:text-xl mt-4 sm:mt-6 mb-3 gold-gradient'>Listen | Purchase</h3>
          <div className='hidden sm:block w-full h-[120px]'>
            <iframe className='border-0 w-full h-full' src={data.embed.large} seamless></iframe>
          </div>
          <div className='sm:hidden w-full h-[42px]'>
            <iframe className='border-0 w-full h-full' src={data.embed.small} seamless></iframe>
          </div>
          <div className='grid grid-cols-2 gap-3 mt-4'>
            {data.listenLinks.map((link, i) => (
              <ButtonLink
                key={i}
                isExternal
                href={link.href}
                ariaLabel={link.ariaLabel}
                icon={link.icon}
                className={`w-full bg-red_dim uppercase text-sm ${i === 0 ? 'col-span-2' : ''}`}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
