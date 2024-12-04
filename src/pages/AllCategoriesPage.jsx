import { useEffect } from "react";
import { fetchCategories } from "../asyncActions/data";
import { useDispatch, useSelector } from "react-redux"

function AllCategoriesPage() {

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