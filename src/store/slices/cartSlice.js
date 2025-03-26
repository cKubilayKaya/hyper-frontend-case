import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.productID === item.productID);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.productID !== action.payload);
    },
    decreaseCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.productID === item.productID);

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.productID !== item.productID);
      }
    },
    increaseCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.productID === item?.product?.productID);
      existingItem.quantity = item?.quantity;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, increaseCart } = cartSlice.actions;
export default cartSlice.reducer;
