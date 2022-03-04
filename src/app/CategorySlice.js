import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from '../api/api'



export const GetCategory = createAsyncThunk('getCategory/CategorySlice',
  async(param)=>{
   
    try {
    
      const res = await ProductApi.getCategory(param)
      return res.data
    } catch (error) {
      throw error
    }
  }
)





const CategorySlice = createSlice(
  {
    name:"category product",
    initialState:{
      products :[],
      status:null
    },
   
    extraReducers:{
   
      [GetCategory.pending] : (state) =>{
        state.status = true
      },
      [GetCategory.fulfilled] :(state, action) =>{
        state.products = action.payload;
        state.status =false
      },
      [GetCategory.rejected] :()=>{
        console.log("Fail")
      },
      
    }
  }
) 


export default CategorySlice.reducer;
