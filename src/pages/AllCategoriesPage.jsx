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
          <div>
          <ul className="listCtategori">
            {categories.map(categori => (
              <li className="categoriesList"
                key={categori.id}
                onClick={() =>{
                  navigate('/products/category')
                  dispatch(fetchProductsFromCategori(categori.id))
                }}
                >
                <img src={'http://localhost:3333'+categori.image}/>
                <p> {categori.title}</p> 
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
  
  export default AllCategoriesPage;