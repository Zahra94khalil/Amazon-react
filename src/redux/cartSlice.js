import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productNumber: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.products.find((product) => product.id === action.payload.id);
            const quantity = parseInt(action.payload.quantity);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state.products.push({ ...action.payload, quantity });
            }
            state.productNumber += quantity;
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const productToRemove = state.products.find((product) => product.id === productId);

            if (productToRemove) {
                state.productNumber -= productToRemove.quantity;
                state.products = state.products.filter((product) => product.id !== productId);
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
