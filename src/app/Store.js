import { configureStore } from '@reduxjs/toolkit';

import ProductSlice from './ProductSlice';
import getIDSlice from './GetIDSlice';
import CartSlice from './CartSlice';
import CategorySlice from './CategorySlice';
import UserSlice from './UserSlice';

export const store = configureStore({
  reducer: {
    Products: ProductSlice,
    Productid: getIDSlice,
    Productoncart: CartSlice,
    ProductCategory: CategorySlice,
    User: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
