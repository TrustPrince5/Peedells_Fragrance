import React from 'react'
import ProductItems from './ProductItems';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function RelatedProduct() {
  const { trending } = useContext(ProductContext)
  return (
    <div className='mt-7'>
      <h2>Related Products</h2>
      <div className='parent grid grid-cols-1 md:grid-cols-4 mt-7 gap-3'>
        {trending.map(item => (
          <ProductItems key={item?.id} item={item} />
        ))}
      </div>  
    </div>
  )
}

export default RelatedProduct;
