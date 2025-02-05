import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from 'axios'

const initialState ={
    loading:false,
    WomensCollection:[],
    errorMessage:null
    
}

export const getwomenProduct =createAsyncThunk('WomensCollection/getwomenProduct', async ()=>
    {
        let url = `http://127.0.0.1:5007/api/products`
        let response = await Axios.get(url)
        // console.log(response.data.product)
        return response.data.product

    })


const WomensCollectionSlice =createSlice({
 
      name:'WomensCollection',
      initialState: initialState,
      
      extraReducers:(builder)=>{
        builder.addCase(getwomenProduct.pending,(state,action)=>{
            state.loading=true;
        }).addCase(getwomenProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.WomensCollection= action.payload;
        }).addCase(getwomenProduct.rejected,(state,action)=>{
            state.loading=false;
            state.errorMessage=`Oops! Something goes wrong!`
        })

      }

})


export default WomensCollectionSlice.reducer