import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {id:101, title: "smt"}
    ]
}

const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        categoriesHome(state, action){
            state.data = action.payload.slice(0, 4)
        },        
        categoriesList(state, action){
            state.data = action.payload
        }
    }
})

export default productsSlice.reducer

export const {
    categoriesList,
    categoriesHome
    
} = productsSlice.actions