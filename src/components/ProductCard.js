/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem, addToCartValue } from '../utils/cartSlice';

const ProductCard = ({product}) => {
  
  const { imageURL, price } = product;
  const dispatch = useDispatch();

  const handleClick = (product) => {
    if (product.quantity > 0) {
      dispatch(addItem(product));
      dispatch(addToCartValue(product));
    }
    
  }

  return (
    <div data-testid="Prod-Card" className='bg-white shadow-xl m-5 p-5 h-80 prod-card'>
        <div className='w-40 h-40'>
          <img src={imageURL} alt="product-image" />
        </div>
        <div className='flex justify-between mt-10'>
          <h4 className='font-bold text-lg mt-1 mr-7'>Rs {price}</h4>
          <button onClick={() => handleClick(product)} className='font-bold text-lg p-1 text-white bg-black'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard