import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firesbase/FirebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
export const getCart = createAsyncThunk('getCart/CartSlice', async (user) => {
  try {
    const q = query(collection(db, 'cart'), where('uid', '==', user.uid));
    const response = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });

    return response;
  } catch (error) {
    console.log(error);
  }
});

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [],
    status: null,
  },
  reducers: {
    addCart: (state, { payload }) => {
      state.products.push(payload);
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      state.products = delItem(state.products, action.payload);
    },

    updateProduct: (state, { payload }) => {
      console.log('🚀 ~ file: CartSlice.js ~ line 53 ~ action', payload);

      state.products.splice(findIndex(state.products, payload.pid), 1, payload);
    },
  },

  extraReducers: {
    [getCart.pending]: (state) => {
      state.status = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = true;
    },
    [getCart.rejected]: (state) => {
      state.status = false;
    },
  },
});

let delItem = (arr, id) => arr.filter((e) => e.pid !== id);
const findIndex = (arr, id) => {
  let pos = -1;
  arr.forEach((arr, index) => {
    if (arr.uid === id) {
      pos = index;
    }
  });

  return pos;
};
export const { removeProduct, updateProduct, addCart } = CartSlice.actions;
export default CartSlice.reducer;
