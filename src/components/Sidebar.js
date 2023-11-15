import React from 'react'
import { categories, categoryValues } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter, updateProductCatelogueOnFilter } from '../utils/catelogueSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(store => store.catelogue.filters);

  const handleFilterChange = (category, value, checked) => {
    if (checked) {
      dispatch(addFilter({category: category, value: value}));
      dispatch(updateProductCatelogueOnFilter());
    } else {
      dispatch(removeFilter({category: category, value: value}));
      dispatch(updateProductCatelogueOnFilter());
    }
  }

  return (
    <div className='p-4 mx-16 w-[25%] my-4 h-[600px] bg-white shadow-xl hidden md:block'>
      { categories.map((cat, index) => (
         <div key={cat}>
          <h2 className='font-black text-xl'>{cat}</h2>
          <ul className='py-4 px-2'>
            { categoryValues[index].map((value, idx) => (
              <li key={value}>
                <input 
                  type="checkbox" 
                  value={value} 
                  checked={filters[cat].includes(value)}
                  onChange={(e) => handleFilterChange(cat, value, e.target.checked)} 
                />
                <label className='font-black mx-3'>{value}</label>
              </li>
            ))}
          </ul>
         </div>
      )) }
    </div>
  )
}

export default Sidebar