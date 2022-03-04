import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [],
    status: null,
  },
  reducers: {
    addNewProduct: (state, { payload }) => {
      console.log(
        '🚀 ~ file: CartSlice.js ~ line 11 ~ payload',
        payload
      );
      state.products.push(payload);
    },

    removeProduct: (state, action) => {
      state.products = delItem(
        state.products,
        action.payload
      );
    },
  },
});

let delItem = (arr, id) => arr.filter((e) => e.id !== id);

export const { addNewProduct, removeProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
