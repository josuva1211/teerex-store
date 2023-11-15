import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Product from './Product'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { updateProductCatelogueOnSearch } from '../utils/catelogueSlice'

const Main = () => {
  const isPopupOpen = useSelector(store => store.cart.isShowPopup);
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const setSerachValue = () => {
    if (searchVal == "") {
      window.location.reload();
    } else {
      dispatch(updateProductCatelogueOnSearch(searchVal));
    }
  }

  return (
    <div>
        <div className='flex justify-center my-5'>
            <input data-testid="search-input" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='outline-none w-1/3 border border-b-black p-2' type="text" placeholder='Search for products...' />
            <button data-test-id="search-btn" onClick={setSerachValue}>
              <img className='mx-5 w-10 h-12' src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="search-icon-button" />
            </button>
            <button className='md:hidden block'>
              <img className='mx-5 w-10 h-12' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png" alt="filter-icon-button" />
            </button>
        </div>
        <div className='flex'>
            <Sidebar />
            <Product />
            { isPopupOpen && <Modal />}
        </div>
    </div>
  )
}

export default Main