import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchProductsFromCategori, fetchSaleProducts } from "../asyncActions/data";
import { useNavigate } from "react-router-dom";



function ProductsFromCategoriPage(props) {

  const {type} = props


  const products = useSelector(store =>store.products.data)
  // const products = useSelector(store =>store.products.product)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (type === 'all')
      {
      dispatch(fetchAllProducts())
      console.log(type)
    } 
    else if (type === 'sale')
      {
      dispatch(fetchSaleProducts())
      console.log(type)
    }
   },[])


  return (
      <div className="mainContent">
        
        <h4>ProductsFromCategoriPage</h4>
          <div>
          <ul className="productsList">
            {products.map(products => (
              <li
                key={products.id}
                onClick={() => navigate("/products/"+products.id)}
              >
                <img width={100} src={'http://localhost:3333'+products.image}/>
               <p> {products.title} </p> 
               <p> ${products.price} </p>
              <p> {products.discont_price} </p>
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
  
  export default ProductsFromCategoriPage;





//   <rout>
//     <Route path='/products/all' element={<ProductPage type='all'/>}/>
//     <Route path='/products/sale' element={<ProductPage type='sale'/>}/>
//     <Route path='/categories/:id' element={<ProductPage type='categories'/>}/>
// </rout>

// function  ProductPage(props) {
//     const {type} = props

//     const {category } = useSelector(store => store.product)

//     if (type=== 'all'){
//         dispatch(allProducts())
//     } else if (type === 'sale'){
//         dispatch(saleProducts())
//     }
//     return (
//         <div>
//             <h1>{category}</h1>
//             123123
//         </div>
//     )
// }



// reducer (slice)

// initialState: {
//     productList: [],
//     category: ''
// }


// // ----------------------
// dispatch(allProducts())
// fetch('all/products')

// {
//     productList: action.paylaod.data,
//     category: 'All products'
// }

// // ----------------------
// dispatch(categoryProducts())
// fetch('categry/3')

// {
//     productList: action.paylaod.data,
//     category: action.payload.category.name
// }

// // ----------------------
// dispatch(saleProducts())
// fetch('all/products')

// {
//     productList: action.paylaod.data.filter(.....),
//     category: 'All sales'
// }