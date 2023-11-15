import { configureStore } from "@reduxjs/toolkit";
import catelogueSlice from "./catelogueSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        catelogue: catelogueSlice,
        cart: cartSlice
    }
})

export default appStore;