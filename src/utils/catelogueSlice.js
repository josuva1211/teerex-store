import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const catelogueSlice = createSlice({
    name: "catelogue",
    initialState: {
        productCatelogue: [],
        filteredProductCatelogue: [],
        filters: {
            Colour: [],
            Gender: [],
            Price: [],
            Type: [],
        },
    },
    reducers: {
        addProductCatelogue: (state, action) => {
            state.productCatelogue = action.payload;
            state.filteredProductCatelogue = action.payload;
        },
        updateProductCatelogueOnSearch: (state, action) => {
            state.filteredProductCatelogue = state.filteredProductCatelogue.filter(prod => prod.name.toLowerCase().includes(action.payload.toLowerCase())
                || prod.color.toLowerCase().includes(action.payload.toLowerCase())
                || prod.type.toLowerCase().includes(action.payload.toLowerCase())
            )
        },
        updateProductCatelogueOnFilter: (state) => {
            state.filteredProductCatelogue  = state.productCatelogue.filter((product) => {
                if (state.filters.Colour.length > 0 && !state.filters.Colour.includes(product.color)) {
                  return false;
                }

                if (state.filters.Price.length > 0) {
                    const priceRanges = state.filters.Price.map((range) => {
                      if (range !== "Rs450") {
                        var [minPrice, maxPrice] = range.split('-');
                      } 
                      
                      if (range === "Rs450") {
                        return {
                            min: parseInt(range.replace('Rs', '')),
                            max: Infinity
                          };
                      } else {
                        return {
                            min: parseInt(minPrice.replace('Rs', '')),
                            max: parseInt(maxPrice.replace('Rs', '')),
                        };
                      }
                    });
                
                    const matchesAnyPriceRange = priceRanges.some((range) => {
                      const { min, max } = range;
                      return product.price >= min && product.price <= max;
                    });
                
                    if (!matchesAnyPriceRange) {
                      return false;
                    }
                  }
              
              
                if (state.filters.Gender.length > 0 && !state.filters.Gender.includes(product.gender)) {
                  return false;
                }
              
                if (state.filters.Type.length > 0 && !state.filters.Type.includes(product.type)) {
                  return false;
                }
              
                return true;
            });
              
        },
        addFilter: (state, action) => {
            const { category, value } = action.payload
            state.filters = {
                ...state.filters,
                [category]: [...state.filters[category], value],
            };
        },
        removeFilter: (state, action) => {
            const { category, value } = action.payload
            state.filters = {
                ...state.filters,
                [category]: state.filters[category].filter((item) => item !== value),
            };
        }
    }
})

export const { addProductCatelogue, updateProductCatelogueOnSearch, updateProductCatelogueOnFilter, addFilter, removeFilter } = catelogueSlice.actions;

export default catelogueSlice.reducer;