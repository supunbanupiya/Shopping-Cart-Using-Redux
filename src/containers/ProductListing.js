import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state)=>state);
    console.log(products)

  return (
        <div className='ui grid container' style={{ marginTop: '2rem' }}>
         <ProductComponent/> 
        </div>
      );
}

export default ProductListing