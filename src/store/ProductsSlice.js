import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    data: [],
    category:[],
    product: [],
    productDetail:{}, //в экшене где получение данных предусмотреть свойство из шоу по умолчанию труе менять в филтрации его
    cart:{
        productList:[],
        totalCount: 0,
        totalSum: 0,
    }
}

const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        homeItemContent(state, action){
            state.data = action.payload.slice(0, 4)
        },
        categoriesProducts(state, action){
            state.data = action.payload
        },         
        categoriesList(state, action){
            state.category = action.payload
        },
        categoriesHomeList(state, action){
            state.category = action.payload.slice(0, 4)
        },
        productsList(state, action){
            state.data = action.payload
        },
        productItem(state, action){
            state.product = action.payload
        },
        saleProducts(state, action){
            state.data = action.payload
        },
        productDetailByid(state, action){

            state.productDetail = action.payload[0]
        },

        // filterProductsByMinPrice(state, action) {
                        
        //     const updatedData = state.data.map(product => {
        //     return {
        //         ...product, isShow: product.price >= action.payload
        //         };
        //     });
        //     return {
        //         ...state,
        //         data: updatedData
        //     };
        // },
        

        filterProductsByMinPrice(state, action){
            state.data = state.data.map(product => {
            return {
                ...product, isShow: product.price >= action.payload
                };
            });
            // return {
            //     ...state,
            //     data: updatedData
            // };
        // state.data.map(product => ({...product, isShow: product.price >= action.payload}))

            // if (state.data.map(product => product.price >= action.payload))
            // {
            //     (state.data.map(product => product.isShow = true))
            // } else{ 
            //     (state.data.map(product => product.isShow = false))
            // }
            // state.data = state.data.filter(product => product.price >= action.payload )
        },

        filterProductsByMaxPrice(state, action){
            // state.data = state.data.filter(product => product.price <= action.payload )
            state.data = state.data.map(product => {
                return {
                    ...product, isShow: product.price <= action.payload
                    };
                });
            },

            filterProductsByDiscount(state, action) {
                const isChecked = action.payload;
            
                state.data = state.data.map(product => {
                    return {
                        ...product,
                        isShow: isChecked ? product.discont_price != null : true 
                    };
                });
            },

        
        sortProductsByMinPrice(state){
             
            state.data = state.data.sort((a,b) => a.price - b.price)

        },
        sortProductsByMaxPrice(state){
            state.data = state.data.sort((a,b) => b.price - a.price )

        },
        sortProductsByDate(state){
            state.data = state.data.sort((a,b) => new Date(a.createAt) - new Date(b.createAt) )

        },
        sortProductsById(state){
            state.data = state.data.sort((a,b) => a.id - b.id )

        },
        addProductToCart(state, action){
            const {id, count} = action.payload
            const findProduct = state.product.find((product) => product.id === id)
            if (findProduct){
                findProduct.count+=count
            }
            else{
                state.cart.productList.push({
                    ...findProduct,
                     count
                })
            }
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
    saleProducts,
    homeItemContent,
    categoriesHomeList,
    filterProductsByDiscount,
    filterProductsByPrice,
    filterProductsByMinPrice,
    filterProductsByMaxPrice,
    sortProductsByMinPrice,
    sortProductsByMaxPrice,
    sortProductsByDate,
    sortProductsById,
    addToCart,
    addProductToCart,
    productDetailByid

    
} = productsSlice.actions