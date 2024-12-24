import { useEffect } from "react";
import { fetchCategories, fetchProductsFromCategori } from "../asyncActions/data";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

function AllCategoriesPage() {

  const navigate = useNavigate()
  const categories = useSelector(store => store.products.category)

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
                  navigate('/products/category')
                  dispatch(fetchProductsFromCategori(categori.id))
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