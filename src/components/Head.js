import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Head = () => {
  const cartLength = useSelector(store => store.cart.items.length);
  
  return (
    <div className='flex justify-between bg-gray-50'>
      <div className='py-4 px-10'>
        <h1 className='text-2xl'>TeeRex Store</h1>
      </div>
      <div className='flex py-4 px-10'>
        <Link to="/">
          <h1 className='text-2xl mx-5 text-decoration-line: underline'>Products</h1>
        </Link>
        <Link to="/cart">
          <img className='w-10 h-10' src='https://i.pinimg.com/1200x/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg' alt='cart-logo' />
        </Link>
        <span className='font-bold text-xl'>{cartLength}</span>
      </div>
    </div>
  )
}

export default Head