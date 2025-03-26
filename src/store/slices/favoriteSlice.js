import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const item = action.payload;
      const existingItem = state.favoriteItems.find((i) => i?.productID == item?.productID);

      if (!existingItem) {
        state.favoriteItems.push(item);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter((favoriteItem) => favoriteItem.productID !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
