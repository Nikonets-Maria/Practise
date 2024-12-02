import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchHomeCategories } from "../asyncActions/data";
import { useEffect } from "react";



function HomePage() {

  const categories = useSelector(store => store.products.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeCategories())
  }, [])


    return (
      <div>
          
          <div className="HomeHeader">
            <h1>Amazing Discounts on Garden Products!</h1>
            <button>Check out</button>
          </div>
          <div>
            <h2>Categories</h2>
            <ul>
            {categories.map(categori => (
              <li
                key={categori.id}
              >
                {categori.title}
                <img width={250} src={'http://localhost:3333'+categori.image}/>
              </li>
            ))}
          </ul>
            <hr></hr>
            All categories
          </div>
          <div>
            5% form
          </div>
          <div>
            sale
          </div>
      </div>
    );
  }
  
  export default HomePage;