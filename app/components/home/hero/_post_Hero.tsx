import React from 'react';
import styles from './styles.module.css';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
import data from '@/app/data/music/heresy';
import { getGalleryImages } from '@/app/libs/getGalleryImages';
import MainImages from './HeroImages';

const Hero = () => {
  const images = getGalleryImages({ folderPath: '/imgs/heresy/album-gallery' });
  images.unshift(data.frontCover.url);

  return (
    <Section id='hero' className={`${styles['hero-height']} items-center`}>
      <div className='flex flex-col justify-center h-full w-full sm:h-auto sm:grid sm:grid-cols-2 sm:gap-x-10 lg:gap-x-20'>
        <div className='w-full rounded-lg	bg-black/30 py-2 mb-4 col-start-2 row-start-1 flex flex-col justify-center'>
          <h2 className='text-lg sm:text-3xl text-red_important'>In Thrall to Heresy</h2>
          <p className='sm:text-lg'>New album out now</p>
        </div>
        <div className='flex flex-shrink-1 justify-center min-h-0 max-w-full max-h-full aspect-square sm:items-start col-start-1 row-start-1 row-span-3'>
          <MainImages images={images} altText={data.frontCover.altText} />
        </div>
        {/* <div className='mt-4 col-start-2 row-start-2'>
          <p className='text-sm sm:text-base'>
            From upcoming album <span className=' text-red_important'>In Thrall to Heresy</span>
          </p>
          <p className='text-red_important'>99 | 99 | 2024</p>
        </div> */}
        <div className='w-full mb-4 col-start-2 row-start-2 row-span-2'>
          <h3 className='text-lg sm:text-xl mt-4 sm:mt-6 mb-3 text-red_bright'>
            Listen | Purchase
          </h3>
          <div className='hidden sm:block w-full h-[120px]'>
            <iframe className='border-0 w-full h-full' src={data.embed.large} seamless></iframe>
          </div>
          <div className='sm:hidden w-full h-[42px]'>
            <iframe className='border-0 w-full h-full' src={data.embed.small} seamless></iframe>
          </div>
          <div className='flex flex-col space-y-3 mt-4'>
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
    </Section>
  );
};

export default Hero;