import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchProductsById } from "../asyncActions/data"
import { addProductToCart, addToCart } from "../store/ProductsSlice"

function ProductItemPage() {

const product = useSelector(store => store.products.productDetail)


const dispatch = useDispatch()
const navigate = useNavigate()
const {id} = useParams()

const [count, setCount] = useState(1)

useEffect(() => {
  dispatch(fetchProductsById(id))

 },[])


return (
    <div>
      
      
        <ul>
      
            <li 
            className="productsItem"
            >
            <img width={100} src={'http://localhost:3333'+product.image}/>
             
             <div className="productInfo"> 
                <h3> {product.title} </h3> 
                <h2> ${product.price} </h2>
                <div className="countner">
                <button onClick={() => setCount(count-1)}>-</button>
                  <p>{count}</p>
                  <button onClick={() => setCount(count+1)}>+</button>
                </div>
                <button onClick={() => dispatch(addProductToCart({id: product.id, count:count}))}> Add to cart </button> 
                  {/* колличество из счетчика , счетчик может быть обычным состоянием, если продукта в корзине не существует добавляем продукт как новый элемент массива, если есть увеличеваем количество в продукте, проверка вс редьюсере */}
                  
                <h4> Description </h4>
                <p> {product.description}</p>
                

             </div>
            

            </li>
        </ul>
        



      </div>
    );
  }
  
  export default ProductItemPage;