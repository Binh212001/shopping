import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from '../api/api'





export const getByid = createAsyncThunk('getByid/getIDSlice',
  async (params)=>{
    try {
      const response = await ProductApi.getByID(params);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)


const getIDSlice = createSlice(
  {
    name:"getIDSlice",
    initialState:{
      products :[],
      status:null
    },
 
    extraReducers:{
      
       [getByid.pending] : (state) =>{
        state.status = true

      },
      [getByid.fulfilled] :(state, action) =>{
          
         state.products = action.payload;
        state.status = false

      },
      [getByid.rejected] :()=>{
        console.log("Fail")
      }
    }
  }
) 

export default getIDSlice.reducer;
