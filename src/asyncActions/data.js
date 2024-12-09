import { categoriesHome, categoriesList, categoriesProducts, productItem, productsList,  } from "../store/ProductsSlice";

export function fetchCategories(){
    return function(dispatch){
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => dispatch(categoriesList(data)));
    }
}

export function fetchHomeCategories(){
    return function(dispatch){
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => dispatch(categoriesHome(data)));
    }
}

export function fetchProductsFromCategori(categoryId){
    return function(dispatch){
        fetch('http://localhost:3333/products/all ')

        // fetch('http://localhost:3333/categories/'+categoryId)
            .then(res => res.json())
            .then(data => dispatch(categoriesProducts(data.filter(categori => categori.categoryId === categoryId)
            )));
    }
}

export function fetchAllProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all ')
            .then(res => res.json())
            .then(data => dispatch(productsList(data)));
    }
}

export function fetchProductsById(id){
    return function(dispatch){
        fetch('http://localhost:3333/products/'+id)
            .then(res => res.json())
            .then(data => dispatch(productItem(data)));
    }
}

