import { configureStore } from "@reduxjs/toolkit";

import ProductSlice from "./ProductSlice";
import getIDSlice from "./GetIDSlice";
import CartSlice from "./CartSlice";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
  reducer:{
    Products :ProductSlice,
    Productid:getIDSlice,
    Productoncart:CartSlice,
    ProductCategory: CategorySlice
  }
})

