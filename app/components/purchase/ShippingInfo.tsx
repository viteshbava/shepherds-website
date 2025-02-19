import React from 'react';
import { FaCompactDisc, FaRecordVinyl } from 'react-icons/fa';

const ShippingInfo = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 items-center'>
      <div className='p-4 border border-gray-200 rounded-lg '>
        <div className='flex items-center text-lg font-semibold text-red-900'>
          <FaRecordVinyl className='mr-2 text-3xl' />
          Vinyl
        </div>
        <div className='mt-2 text-sm'>
          <p>
            📦 <strong>NZ:</strong> Up to $20
          </p>
          <p>
            📦 <strong>Australia:</strong> Up to $35
          </p>
          <p>
            📦 <strong>International:</strong> Up to $60
          </p>
        </div>
      </div>

      <div className='p-4 border border-gray-200 rounded-lg'>
        <div className='flex items-center text-lg font-semibold text-red-900'>
          <FaCompactDisc className='mr-2 text-3xl' />
          CD
        </div>
        <div className='mt-2 text-sm'>
          <p>
            📦 <strong>NZ:</strong> Up to $10
          </p>
          <p>
            📦 <strong>Australia:</strong> Up to $25
          </p>
          <p>
            📦 <strong>International:</strong> Up to $35
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
