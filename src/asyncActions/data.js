import { categoriesHome, categoriesList,  } from "../store/ProductsSlice";

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