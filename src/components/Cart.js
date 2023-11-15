import React from 'react'
import { useSelector } from 'react-redux'
import CartList from './CartList';
import Modal from './Modal';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  const cartValue = useSelector(store => store.cart.cartValue);
  const isPopupOpen = useSelector(store => store.cart.isShowPopup);

  return (
    <div>
        <h1 className='text-2xl m-10'>Shopping Cart</h1>
        {cartItems.map((item, index) => <CartList key={index} item={item} />)}
        <div className='border border-b-black w-1/2 m-0 m-auto'></div>
        <div className='flex justify-center mt-10'>
          <h2 className='font-bold text-xl'>Total Amount  Rs {cartValue}</h2>
        </div>
        { isPopupOpen && <Modal />}
    </div>
  )
}

export default Cart