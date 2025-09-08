import React from 'react'
import ProductItems from './ProductItems';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function Latest() {
  const { latest } = useContext(ProductContext);

  return (
    <div className='mt-7'>
      <h2>Latest Products</h2>
      <div className='parent  grid grid-cols-1 md:grid-cols-4 mt-5 gap-4'>
        {latest.map(item => (
          <ProductItems key={item?.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Latest
