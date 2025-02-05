import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from 'axios'

const initialState={
    loading:false,
    MensCollection:[],
    errorMessage:null
}


export const getmenProduct= createAsyncThunk('MensCollection/getmenProduct', async ()=>
    {
        let url = `http://127.0.0.1:5007/api/products`
        let response = await Axios.get(url)
        // console.log(response.data.product)
        return response.data.product
    })

const MensCollectionSlice=  createSlice({
    name:'MensCollection',
    initialState:initialState,

   
    extraReducers:(builder)=>{
                builder.addCase(getmenProduct.pending,(state,action)=>{
                    state.loading=true;
                }).addCase(getmenProduct.fulfilled,(state,action)=>{
                    state.loading=false;
                    state.MensCollection=action.payload;
                }).addCase(getmenProduct.rejected,(state,action)=>{
                    state.loading=false;
                    state.errorMessage=`Oops! Something goes wrong!`
                })
            }
}) 
export default MensCollectionSlice.reducer