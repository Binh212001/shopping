import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { db } from '../Firesbase/FirebaseConfig';

export const getCart = createAsyncThunk(
  'getCart/CartSlice',
  async (uid) => {
    db.collection('cities')
      .where('uid', '==', uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
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
