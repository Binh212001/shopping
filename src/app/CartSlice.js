import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { db } from '../Firesbase/FirebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
export const getCart = createAsyncThunk(
  'getCart/CartSlice',
  async (user) => {
    try {
      if (user) {
        const q = query(
          collection(db, 'cart'),
          where('uid', '==', user.uid)
        );
        const response = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          response.push(doc.data());
        });

        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [],
    status: null,
  },
  reducers: {
    addNewProduct: (state, { payload }) => {
      state.products.push(payload);
    },

    removeProduct: (state, action) => {
      state.products = delItem(
        state.products,
        action.payload
      );
    },
  },

  extraReducers: {
    [getCart.pending]: (state) => {
      state.status = true;
    },
    [getCart.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = true;
    },
    [getCart.rejected]: (state) => {
      state.status = false;
    },
  },
});

let delItem = (arr, id) => arr.filter((e) => e.id !== id);

export const { addNewProduct, removeProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
