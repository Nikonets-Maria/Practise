import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchHomeCategories, fetchProductsFromCategori, fetchSaleProducts } from "../asyncActions/data";
import { useEffect } from "react";
import OffForm from "../components/OffForm";
import { useNavigate } from "react-router-dom";



function HomePage() {

  const navigate = useNavigate()
  const categories = useSelector(store => store.products.category)
  const saleproducts = useSelector(store =>store.products.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeCategories())
  }, [])
  useEffect(() => {
    dispatch(fetchSaleProducts())
  }, [])


    return (
      <div>
          
          <div className="baner">
            <h1>Amazing Discounts on Garden Products!</h1>
            
            <button>Check out</button>
          </div>
          <div className="categoriesListHome">
            
            <div className="lineBtn">
              <h2>Categories</h2>
              <hr className="line"></hr>
              <button onClick={() => navigate('/allcategories')} className="categoriBtn" >All categories</button>
            </div>
            <ul className="categoriesList">
            {categories.map(categori => (
              <li
                key={categori.id}
                onClick={() =>{
                  navigate('/products/all')
                  dispatch(fetchProductsFromCategori(categori.id))
                  // navigate('/products/all')
                }}
              >
                {categori.title}
                <img width={250} src={'http://localhost:3333'+categori.image}/>
              </li>
            ))}
          </ul>
            
          </div>
          <div>
            <OffForm/>
          </div>
          <div>

            <h1>sale</h1>

            <ul className="saleList">
            {saleproducts.map(products => (
              <li
                key={products.id}
                onClick={() =>{
                  navigate('/products/all')
                  dispatch(fetchProductsFromCategori(products.id))
                  // navigate('/products/all')
                }}
              >
                {products.title}
                <img width={250} src={'http://localhost:3333'+products.image}/>
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
  
  export default HomePage;