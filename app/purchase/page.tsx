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

const Purchase = async () => {
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
          Purchase
        </h1>
        <div className='max-w-xl mt-10'>
          <div className='relative w-full max-w-[500px] h-[80px] sm:h-[100px] mx-auto'>
            <Image
              src='/imgs/heresy/album-logo.png'
              alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
              className='object-contain'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
            />
          </div>
          <p className='gold-statement text-2xl'>Double LP Vinyl | CD</p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6 my-8'>
            <div className='relative aspect-square w-[200px]'>
              <Image
                src='/imgs/heresy/placeholder-vinyl.png'
                alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
                className='object-contain'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
              />
            </div>
            <div className='relative aspect-square w-[200px]'>
              <Image
                src='/imgs/heresy/placeholder-cd.png'
                alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
                className='object-contain'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
              />
            </div>
          </div>

          <p className='gold-statement text-2xl'>Pre-orders open</p>

          <p className='my-6'>
            Our new album <span className='font-semibold italic'>In Thrall to Heresy</span> will be
            released on{' '}
            <span className='font-semibold'>
              21<sup>st</sup> February 2025
            </span>{' '}
            and will be available on 2LP Vinyl and CD.
          </p>

          <div
            className={`flex flex-col justify-center items-center bg-red_dim/10 backdrop-blur rounded-md p-8 mb-6`}>
            <p className='mb-6'>To pre-order the album, please contact us directly via:</p>
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

          <p className='mb-4'>
            If you&#39;re based in Auckland, we may be able to deliver to you directly without
            shipping costs. Let us know where you&#39;d like your order delivered or where
            you&#39;re based when you contact us.
          </p>

          <p className='mb-4'>
            Albums are expected to be ready near the release date; we&#39;ll ship orders out around
            then. If there are any delays, we&#39;ll keep you informed.
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Pricing (NZD)</h2>

          <div className='overflow-x-auto'>
            <table className='table-auto w-full text-left border border-gray-200 hidden sm:table'>
              <thead>
                <tr className='bg-red_dim/50'></tr>
                <tr className='bg-red_dim/50'>
                  <th className='px-4 py-2 font-semibold w-1/2'>Item</th>
                  <th className='px-4 py-2 font-semibold w-1/12'>Unit Price</th>
                  <th className='px-4 py-2 font-semibold w-1/8'>Shipping (NZ)</th>
                  <th className='px-4 py-2 font-semibold w-1/8'>Shipping (Australia)</th>
                  <th className='px-4 py-2 font-semibold w-1/8'>Shipping (International)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>
                    <FaRecordVinyl className='inline-block mr-2 text-red-900 text-3xl' />
                    <FaRecordVinyl className='inline-block mr-2 text-red-900 text-3xl' />
                    2LP Vinyl <p className='text-red_bright italic mt-2'>In Thrall to Heresy</p>
                  </td>
                  <td className='border px-4 py-2'>$80</td>
                  <td className='border px-4 py-2'>Up to $20</td>
                  <td className='border px-4 py-2'>Up to $35</td>
                  <td className='border px-4 py-2'>Up to $60</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>
                    <FaCompactDisc className='inline-block mr-2 text-red-900 text-3xl' />
                    CD <p className='text-red_bright italic mt-2'>In Thrall to Heresy</p>
                  </td>
                  <td className='border px-4 py-2'>$30</td>
                  <td className='border px-4 py-2' rowSpan={2}>
                    Up to $10
                  </td>
                  <td className='border px-4 py-2' rowSpan={2}>
                    Up to $25
                  </td>
                  <td className='border px-4 py-2' rowSpan={2}>
                    Up to $35
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>
                    <FaCompactDisc className='inline-block mr-2 text-green_dim text-3xl' />
                    CD <p className='text-green_bright italic mt-2'>First Two Albums</p>
                  </td>
                  <td className='border px-4 py-2'>$20 each</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='overflow-x-auto sm:hidden'>
            <table className='table-auto w-full text-left border border-gray-200'>
              <thead>
                <tr className='bg-red_dim/50'>
                  <th className='px-4 py-2 font-semibold'>Item</th>
                  <th className='px-4 py-2 font-semibold w-1/12'>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>
                    <FaRecordVinyl className='inline-block mr-2 text-red-900 text-3xl' />
                    <FaRecordVinyl className='inline-block mr-2 text-red-900 text-3xl' />
                    2LP Vinyl{' '}
                    <p className='text-red_bright italic mt-2 mb-4'>In Thrall to Heresy</p>
                    <p className='mt-2'>Shipping (NZ): Up to $20</p>
                    <p className='mt-2'>Shipping (Australia): Up to $35</p>
                    <p className='mt-2'>Shipping (International): Up to $60</p>
                  </td>
                  <td className='border px-4 py-2'>$80</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>
                    <FaCompactDisc className='inline-block mr-2 text-red-900 text-3xl' />
                    CD <p className='text-red_bright italic mt-2 mb-4'>In Thrall to Heresy</p>
                    <p className='mt-2'>Shipping (NZ): Up to $10</p>
                    <p className='mt-2'>Shipping (Australia): Up to $25</p>
                    <p className='mt-2'>Shipping (International): Up to $35</p>
                  </td>
                  <td className='border px-4 py-2'>$30</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>
                    <FaCompactDisc className='inline-block mr-2 text-green_dim text-3xl' />
                    CD <p className='text-green_bright italic mt-2 mb-4'>First Two Albums</p>
                    <p className='mt-2'>Shipping (NZ): Up to $10</p>
                    <p className='mt-2'>Shipping (Australia): Up to $25</p>
                    <p className='mt-2'>Shipping (International): Up to $35</p>
                  </td>
                  <td className='border px-4 py-2'>$20 each</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-sm mt-2 italic'>All prices are in NZD.</p>

          <p className='mt-8 mb-4'>
            Shipping prices above are for a single item only. If you&#39;d like more items,
            we&#39;ll calculate the cost for you. Once you contact us, we&#39;ll reach out with
            final pricing details and how to make the payment.
          </p>

          <p className='mb-8'>Orders for physical albums on Bandcamp will open at a later point.</p>
          <p className='text-2xl mb-4'>Thank you!</p>
        </div>
      </Section>
    </>
  );
};

export default Purchase;
