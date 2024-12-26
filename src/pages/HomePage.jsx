import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchHomeCategories, fetchProductsById, fetchProductsFromCategori, fetchSaleForHomeProducts, fetchSaleProducts } from "../asyncActions/data";
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
    dispatch(fetchSaleForHomeProducts())
  }, [])


    return (
      <div>
          
          <div className="baner">
            <h1>Amazing Discounts on Garden Products!</h1>
            
            <button>Check out</button>
          </div>
        <div className="homeContent">
          
          <div>
            
            <div className="lineBtn">
              <h2>Categories</h2>
              <hr className="line"></hr>
              <button onClick={() => navigate('/allcategories')} className="categoriBtn" >All categories</button>
            </div>
            <ul  className="categoriesListHome">
            {categories.map(categori => (
              <li className="categoriesList"
                key={categori.id}
                onClick={() =>{
                  navigate('/products/all')
                  dispatch(fetchProductsFromCategori(categori.id))
                  // navigate('/products/all')
                }}
              >
                <img width={250} src={'http://localhost:3333'+categori.image}/>
                {categori.title}

              </li>
            ))}
          </ul>
            
          </div>
          <div>
            <OffForm/>
          </div>

          <div>
          <div className="lineBtn">
            <h1>Sale</h1>
            <hr className="line"></hr>
            <button onClick={() => navigate('/products/sale')} className="categoriBtn" >All sales</button>
          </div>

            <ul className="saleList">
            {saleproducts.map(products => (
              <li
              className="listContent"
                key={products.id}
                onClick={() =>{
                  navigate('/products/'+products.id)
                  dispatch(fetchProductsById(products.id))
                }}
              >
                
                <img width={250} src={'http://localhost:3333'+products.image}/>
                <p> {products.title}</p> 
                <h3> ${products.discont_price}</h3>
                <p> ${products.price}</p>
              </li>
            ))}
          </ul>
          </div>
          </div>
      </div>
    );
  }
  
  export default HomePage;