
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductsById } from '../asyncActions/data';

function CartPage() {
  const navigate = useNavigate()
  const cartProducts = useSelector(store =>store.products.cart.productList)
  const filtredProducts = cartProducts.filter(elem => elem.isInCart === true)
  const dispatch = useDispatch()
  

    return (
      <div>
        <h1>Shopping cart</h1>
        <p>Looks like you have no items in your basket currently.</p>
        <button onClick={() => navigate('/products/all')}>Continue Shopping</button>
        {/* кнопка крестик для удаления по id */}


        <div>
          <ul className="cartList">
            {filtredProducts.map(products => (
              
              <li
              className='cartProduct'
                key={products.id}
                onClick={() =>{
                  navigate('/products/'+products.id)
                  // dispatch(fetchProductsById(products.id))
                }}
              >
              
                <img width={100} src={'http://localhost:3333'+products.image}/>
               <p> {products.title} </p>
               <button>X</button> 
                <button>+</button>
                <p>count</p>
                <button>-</button>

               <p> ${products.price} </p>
              <p> {products.discont_price} </p>
              </li>
            ))}
          </ul>
          <form> Cart Form</form>
          </div>

      </div>
    );
  }
  
  export default CartPage;