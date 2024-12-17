import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchProductsById } from "../asyncActions/data"

function ProductItemPage() {

const productData = useSelector(store => store.products.product)


const dispatch = useDispatch()
const navigate = useNavigate()

useEffect(() => {
  dispatch(fetchProductsById(3))

 },[])


return (
    <div>
      
      <h4>Product Item</h4>
        <div>
        <ul className="productsItem">
          {productData.map(data => (
            <li
              key={data.id}
            >
              <img width={100} src={'http://localhost:3333'+data.image}/>
             <p> {data.title} </p> 
             <p> ${data.price} </p>
             <p> {data.description}</p>
             <button> Add to cart </button>
             <button>+</button>
             <p>num1</p>
             <button>-</button>

            </li>
          ))}
        </ul>
        </div>



      </div>
    );
  }
  
  export default ProductItemPage;