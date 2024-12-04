import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchHomeCategories } from "../asyncActions/data";
import { useEffect } from "react";
import OffForm from "../components/OffForm";



function HomePage() {

  const categories = useSelector(store => store.products.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeCategories())
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
              <button className="categoriBtn">All categories</button>
            </div>
            <ul className="categoriesList">
            {categories.map(categori => (
              <li
                key={categori.id}
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
            sale
          </div>
      </div>
    );
  }
  
  export default HomePage;