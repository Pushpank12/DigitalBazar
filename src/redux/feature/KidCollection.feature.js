import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from 'axios'

const initialState ={
    loading:false,
    KidsCollection:[],
    errorMessage: null
}

export const getkidProduct =createAsyncThunk('KidsCollection/getkidProduct', async()=>
    {
        // let url = `http://127.0.0.1:5000/api/create/kids-products`;
        let url =`http://127.0.0.1:5007/api/products` 
        let response = await Axios.get(url)
        return response.data.product
    })

const KidsCollectionSlice= createSlice({
        name:'KidsCollection',
        initialState:initialState,

        extraReducers:(builder)=>{
            builder.addCase(getkidProduct.pending,(state,action)=>{
                state.loading=true;
            }).addCase(getkidProduct.fulfilled,(state,action)=>{
                state.loading=false;
                state.KidsCollection=action.payload;
            }).addCase(getkidProduct.rejected,(state,action)=>{
                state.loading=false;
                state.errorMessage=`Oops! Something goes wrong!`
            })
        }
    })

 export default  KidsCollectionSlice.reducer   