import React from 'react';
import { FaCompactDisc, FaRecordVinyl } from 'react-icons/fa';

const ShippingInfo = () => {
  return (
    <div className='grid md:flex justify-center grid-cols-2 gap-4 w-full'>
      <div className='p-4 border border-gray-200 rounded-lg'>
        <div className='flex items-center justify-center text-lg font-semibold text-red-900 mb-4'>
          <FaRecordVinyl className='mr-2 text-3xl' />
          Vinyl
        </div>
        <div className='mt-2 text-sm'>
          <p className='mb-2'>
            📦 <span className='font-bold'>NZ:</span>{' '}
            <span className='block sm:inline'>Up to $20</span>
          </p>
          <p className='mb-2'>
            📦 <span className='font-bold'>Australia:</span>{' '}
            <span className='block sm:inline'>Up to $35</span>
          </p>
          <p className='mb-2'>
            📦 <span className='font-bold'>International:</span>{' '}
            <span className='block sm:inline'>Up to $60</span>
          </p>
        </div>
      </div>

      <div className='p-4 border border-gray-200 rounded-lg'>
        <div className='flex items-center justify-center text-lg font-semibold text-red-900 mb-4'>
          <FaCompactDisc className='mr-2 text-3xl' />
          CD
        </div>
        <div className='mt-2 text-sm'>
          <p className='mb-2'>
            📦 <span className='font-bold'>NZ:</span>{' '}
            <span className='block sm:inline'>Up to $10</span>
          </p>
          <p className='mb-2'>
            📦 <span className='font-bold'>Australia:</span>{' '}
            <span className='block sm:inline'>Up to $25</span>
          </p>
          <p className='mb-2'>
            📦 <span className='font-bold'>International:</span>{' '}
            <span className='block sm:inline'>Up to $35</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
