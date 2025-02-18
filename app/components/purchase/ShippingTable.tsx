import React from 'react';
import { FaCompactDisc, FaRecordVinyl } from 'react-icons/fa';

const ShippingTable = () => {
  return (
    <>
      <div className='overflow-x-auto hidden sm:table'>
        <table className='table-auto w-full text-left border border-gray-200 '>
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
                2LP Vinyl <p className='text-red_bright italic mt-2 mb-4'>In Thrall to Heresy</p>
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
    </>
  );
};

export default ShippingTable;
