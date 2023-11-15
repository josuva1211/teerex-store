import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { addProductCatelogue } from '../utils/catelogueSlice';
import { API_CATOLOGUE_URL } from '../utils/constants';
import NoDataFound from './NoDataFound';

const Product = () => {

  const dispatch = useDispatch();

  const fetchCatelogue = async () => {
      
      const data = await fetch(API_CATOLOGUE_URL);
      
      data.forEach(prd => prd['cartQty'] = 0)
      dispatch(addProductCatelogue(data));
      
  }
  
  useEffect(() => {
    fetchCatelogue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  const products = useSelector((store) => store.catelogue.filteredProductCatelogue);
  if (!products) return;

  return products.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className='flex flex-wrap justify-evenly w-[75%]'>
      {products && products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Product;