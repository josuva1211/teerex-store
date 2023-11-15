import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCartValue, decreaseToCartValue, decreaseToCartValueOnRemove, removeItem, togglePopup, updateItemCartQty } from '../utils/cartSlice';

const CartList = ({item}) => {
  
  const dispatch = useDispatch();

  const onAddCartQty = () => {
    if (item.cartQty === item.quantity) {
      dispatch(togglePopup());
      return;
    }

    dispatch(addToCartValue(item));
    dispatch(updateItemCartQty({itemId: item.id, updatedItemData: { cartQty: item.cartQty + 1 }}))
  }

  const onDecreaseCartQty = () => {
    if (item.cartQty === 1) {
      onRemoveItem();
    } else {
      dispatch(decreaseToCartValue(item));
      dispatch(updateItemCartQty({itemId: item.id, updatedItemData: { cartQty: item.cartQty - 1 }}))
    }
    
  }

  const onRemoveItem = () => {
    dispatch(decreaseToCartValueOnRemove(item));
    dispatch(removeItem(item.id));
  }

  return (
    <div className='flex justify-around my-10'>
        <img className='w-20 h-20' src={item.imageURL} alt='product-image' />
        <div className='flex-col w-20'>
            <h3 className='font-bold text-lg'>{item.name}</h3>
            <h3 className='font-bold text-lg'>Rs {item.price}</h3>
        </div>
        <button className='border border-gray-100 px-5 bg-gray-300 text-black font-bold w-20'>Qty: {item.cartQty}</button>
        <button onClick={onAddCartQty} className='font-bold text-xl px-5 py-1 text-white bg-black w-20'>+</button>
        <button onClick={onDecreaseCartQty} className='font-bold text-xl px-5 py-1 text-white bg-black w-20'>-</button>
        <button onClick={onRemoveItem} className='font-bold text-xl px-5 py-1 text-white bg-black w-20'>X</button>
    </div>
  )
}

export default CartList