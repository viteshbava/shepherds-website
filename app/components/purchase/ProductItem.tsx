'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/types';

interface ProductItemProps {
  product: Product;
  onClick: () => void;
}

const ProductItem = ({ product, onClick }: ProductItemProps) => {
  const {
    thumbSrc,
    thumbAltText,
    productName,
    productType,
    price,
    priceInfo,
    description,
    details,
  } = product;
  return (
    <div>
      <button
        className='relative aspect-square w-full hover:scale-[1.02] transition-all duration-200'
        onClick={onClick}>
        <Image
          src={thumbSrc}
          alt={thumbAltText}
          className='object-cover'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </button>
      {(productName || productType) && (
        <p>
          <span className='italic'>{productName}</span> -{' '}
          <span className='font-bold'>{productType}</span>
        </p>
      )}
      {(price || priceInfo) && (
        <p className='text-red_bright mb-2'>
          {price} ({priceInfo})
        </p>
      )}
      <div className='text-sm text-gray-400'>
        {description && <p className='mb-1'>{description}</p>}
        {details && (
          <ul className=' list-disc list-inside'>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
