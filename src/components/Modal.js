import React from 'react'
import { useDispatch } from 'react-redux'
import { togglePopup } from '../utils/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const hidePopup = () => {
    dispatch(togglePopup());
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={hidePopup}>X</button>
            <div className='bg-white p-2 rounded h-48 flex justify-center items-center'>
                <h2 className='p-25 font-bold text-xl text-center'>
                    Sorry! You have exceeded the Available quantity for the selected Product!!!
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Modal