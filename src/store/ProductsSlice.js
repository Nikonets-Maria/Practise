import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    category:[],
    product: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        categoriesHome(state, action){
            state.data = action.payload.slice(0, 4)
        },
        categoriesProducts(state, action){
            state.data = action.payload
            // .filter(categori => categori.categoryId === action.payload)
        },         
        categoriesList(state, action){
            state.category = action.payload
        },
        productsList(state, action){
            state.data = action.payload
        },
        productItem(state, action){
            state.product = action.payload
        },
        saleProducts(state, action){
            state.data = action.payload
        }
    }
})

export default productsSlice.reducer

export const {
    categoriesList,
    categoriesHome,
    categoriesProducts,
    productsList,
    productItem,
    saleProducts
    
} = productsSlice.actions