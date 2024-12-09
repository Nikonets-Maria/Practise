import { useEffect } from "react";
import { fetchCategories, fetchProductsFromCategori } from "../asyncActions/data";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

function AllCategoriesPage() {

  const navigate = useNavigate()
  const categories = useSelector(store => store.products.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

    return (
      <div>
          <h4>AllCategoriesPage</h4>
          <div>
          <ul className="categoriesList">
            {categories.map(categori => (
              <li
                key={categori.id}
                onClick={() =>{
                  dispatch(fetchProductsFromCategori(categori.id))
                  navigate('/products/all')
                }}
                >
                {categori.title}
                <img width={250} src={'http://localhost:3333'+categori.image}/>
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
  
  export default AllCategoriesPage;