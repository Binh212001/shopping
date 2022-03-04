import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from '../api/api'



export const GetProduct = createAsyncThunk('GetProduct/ProductSlice',
  async ()=>{
    try {
      const response = await ProductApi.getAll();
      return response.data
    } catch (error) {
     throw error
    }
  }
)


const ProductSlice = createSlice(
  {
    name:"prodcut",
    initialState:{
      products :[],
      status:null
    },
   
    extraReducers:{
      [GetProduct.pending] : (state) =>{
        state.status = true
      },
      [GetProduct.fulfilled] :(state, action) =>{
        state.products = action.payload;
        state.status =false
      },
      [GetProduct.rejected] :()=>{
        console.log("Fail")
      },
      
      
    }
  }
) 


export default ProductSlice.reducer;
