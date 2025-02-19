import Section from '../components/ui/Section';
import {
  FaCompactDisc,
  FaEnvelope,
  FaMobileAlt,
  FaRecordVinyl,
  FaUserFriends,
} from 'react-icons/fa';
import BackgroundImage from '../components/BackgroundImage';
import Image from 'next/image';
import { getGalleryImages } from '../libs/getGalleryImages';
import { IconNames, Product, Theme } from '../types';
import ProductList from '../components/purchase/ProductList';
import ShippingTable from '../components/purchase/ShippingTable';
import ShippingInfo from '../components/purchase/ShippingInfo';
import ButtonLink from '../components/ui/ButtonLink';

const products: Product[] = [
  {
    thumbSrc: '/imgs/heresy/album-gallery/placeholder-vinyl.png',
    thumbAltText: 'Placeholder Vinyl image',
    productName: 'In Thrall to Heresy',
    productType: '2LP Vinyl',
    price: 'NZD $80',
    priceInfo: 'directly from band',
    description:
      'The full album on LIMITED EDITION black double vinyl. Products due end of Feb 2025.',
    details: ['Gatefold jacket', '2 sided lyric insert', 'Original art by Moonroot'],
  },
  {
    thumbSrc: '/imgs/heresy/album-gallery/placeholder-cd.png',
    thumbAltText: 'Placeholder CD image',
    productName: 'In Thrall to Heresy',
    productType: 'CD',
    price: 'NZD $30',
    priceInfo: 'directly from band',
    description: 'The full album on CD in a jewel case.',
    details: ['12 page lyric booklet', 'Original art by Moonroot'],
  },
  {
    thumbSrc: '/imgs/helios/album-gallery/01.webp',
    gallery: getGalleryImages({ folderPath: '/imgs/helios/album-gallery' }),
    thumbAltText: 'Helios Forsaken digipack image',
    productName: 'Helios Forsaken',
    productType: 'CD',
    price: 'NZD $20',
    priceInfo: 'directly from band',
    description: 'The full album on CD in a fold-out digipack.',
    details: ['Original art by Chris Lewis'],
  },
  {
    thumbSrc: '/imgs/selftitled/album-gallery/01.jpg',
    gallery: getGalleryImages({ folderPath: '/imgs/selftitled/album-gallery' }),
    thumbAltText: 'Shepherds of Cassini jewel case image',
    productName: "'Shepherds of Cassini'",
    productType: 'CD',
    price: 'NZD $20',
    priceInfo: 'directly from band',
    description: 'The full album on CD in a jewel case.',
    details: ['8 page art booklet', 'Original art by Chris Lewis'],
  },
];

const Purchase = () => {
  return (
    <>
      <BackgroundImage
        url='/imgs/home-background.png'
        animation='home-1'
        altText='In Thrall to Heresy back cover'
        finalOpacity={1}
      />
      <Section className='mb-10 sm:mb-20 mt-[7rem] sm:mt-[12rem] items-center'>
        <h1 className='gold-heading-section pb-4 border-white/50 border-b-[1px] w-full'>
          Purchase<br></br>
          <span className='text-xl'>directly or via Bandcamp</span>
        </h1>

        <ProductList products={products} />

        <h2 className='text-xl font-bold mt-8 mb-4'>Shipping Costs (NZD)</h2>
        {/* <ShippingTable /> */}
        <ShippingInfo />
        <p className='text-sm mt-2 italic'>All prices are in NZD.</p>

        <div className='max-w-xl mt-20'>
          <h2 className='text-lg sm:text-2xl gold-heading pb-4 border-white/50 border-b-[1px] w-full'>
            Directly from band
          </h2>

          <div
            className={`flex flex-col justify-center items-center bg-red_dim/10 backdrop-blur rounded-md p-8 my-6`}>
            <p className='mb-6'>
              To purchase directly from us, please contact us via any of the following:
            </p>
            <div>
              <p className='mb-2'>
                <FaEnvelope className='text-red-900 text-2xl inline-block mr-2' /> Email:{' '}
                <a
                  href='mailto:shepherdsofcassini@gmail.com'
                  className='text-red_bright underline link'>
                  shepherdsofcassini@gmail.com
                </a>
              </p>
              <p className='mb-2'>
                <FaMobileAlt className='text-red-900 text-2xl inline-block mr-2' /> DMs on social
                media,
              </p>
              <p>
                <FaUserFriends className='text-red-900 text-2xl inline-block mr-2' /> Contacting a
                band member directly if you know us.
              </p>
            </div>
          </div>

          <p className='max-w-xl mt-8 mb-4'>
            Prices above are for a single item only. If you&#39;d like more items, let us know and
            we&#39;ll calculate the cost for you. Once you contact us, we&#39;ll reach out with
            final pricing details and how to make the payment.
          </p>

          <p className='mb-4'>
            <span className='underline'>
              If you&#39;re based in Auckland, we may be able to deliver to you directly without
              shipping costs.
            </span>{' '}
            Let us know where you&#39;d like your order delivered or where you&#39;re based when you
            contact us.
          </p>

          <h2 className='text-lg sm:text-2xl gold-heading mt-20 pb-4 border-white/50 border-b-[1px] w-full'>
            via bandcamp
          </h2>

          <p className='my-6'>
            Alternavitely, you can make a purchase via our Bandcamp page (prices may be slightly
            different to account for Bandcamp / payment processer fees).
          </p>

          <ButtonLink
            isExternal
            href={'https://shepherdsofcassini.bandcamp.com/merch'}
            ariaLabel='Purchase via Bandcamp'
            theme={Theme.Red}
            icon={IconNames.Bandcamp}
            className={`w-full mb-20`}>
            <span className='whitespace-nowrap'>Purchase on Bandcamp</span>
          </ButtonLink>

          <p className='text-2xl mb-4'>Thank you!</p>
        </div>
      </Section>
    </>
  );
};

export default Purchase;
