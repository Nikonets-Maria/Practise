import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchProductsById, fetchProductsFromCategori, fetchSaleProducts } from "../asyncActions/data";
import { useNavigate } from "react-router-dom";
import { filterProductsByDiscount, filterProductsByMaxPrice, filterProductsByMinPrice, filterProductsByPrice, sortProductsByDate, sortProductsById, sortProductsByMinPrice, sortProductsByMaxPrice } from "../store/ProductsSlice";



function ProductsFromCategoriPage(props) {

  const {type} = props


  const products = useSelector(store =>store.products.data)
  const filtredProducts = products.filter(elem => elem.isShow === true)
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
   },[type])


  return (
      <div className="mainContent">
        
        <h4>ProductsFromCategoriPage</h4> 
        <div className="filter">
          <form>
            <label>
                Price  
                <input id='minPrice' type="number" min="0" placeholder="from" onChange={()=>{dispatch(filterProductsByMinPrice(document.getElementById('minPrice').value))}} /> 
                {/* Добавить к масиву значение true/false которое будет отвечать за наличе на странице и изменять его */}
            </label>
            <label>
                <input id='maxPrice' type="number" min="0" placeholder="to" onChange={()=>{dispatch(filterProductsByMaxPrice(document.getElementById('maxPrice').value))}} /> 
            </label>
            <label onChange={()=>{dispatch(filterProductsByDiscount(products))}}>
              Discounted items 
              <input type="checkbox" />
          </label>             
            <select id="sortPrtion" onChange={() => {dispatch(sortProductsByMinPrice())}}>
              <option onChange={() => {dispatch( sortProductsById())}}>by default id</option>
              <option onChange={() => {dispatch( sortProductsByDate())}}>newest date</option>
              <option onChange={() => {dispatch( sortProductsByMaxPrice())}}>price: high-low</option>
              <option onInput={() => {dispatch( sortProductsByMinPrice())}}>price: low-high</option>
            </select>
          </form>
        </div>


          <div>
          <ul className="productsList">
            {filtredProducts.map(products => (
              
              <li
                key={products.id}
                onClick={() =>{
                  navigate('/products/'+products.id)
                  dispatch(fetchProductsById(products.id))
                  // navigate('/products/all')
                }}
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



