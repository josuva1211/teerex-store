import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cartValue: 0,
        isShowPopup: false
    },
    reducers: {
        addItem: (state, action) => {
            let cartItem = action.payload;
            cartItem = { ...cartItem, cartQty: cartItem.cartQty + 1 }
            state.items = [...state.items, cartItem];
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
        },
        addToCartValue: (state, action) => {
            state.cartValue += action.payload.price;
        },
        decreaseToCartValue: (state, action) => {
            state.cartValue -= action.payload.price;
        },
        decreaseToCartValueOnRemove: (state, action) => {
            state.cartValue -= (action.payload.price * action.payload.cartQty);
        },
        updateItemCartQty: (state, action) => {
            //debugger;
            const { itemId, updatedItemData } = action.payload
            const itemIndex = state.items.findIndex(item => item.id === itemId)
            if (itemIndex !== -1) {
                state.items[itemIndex] = { ...state.items[itemIndex], ...updatedItemData };
            }
        },
        togglePopup: (state) => {
            state.isShowPopup = !state.isShowPopup;
        }
    }
})

export const { addItem, addToCartValue, updateItemCartQty, decreaseToCartValue, removeItem, decreaseToCartValueOnRemove, togglePopup } = cartSlice.actions;

export default cartSlice.reducer;