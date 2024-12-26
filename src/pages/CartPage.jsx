
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductsById } from '../asyncActions/data';
import { Modal } from '../components/Modal';
import { deliteProductById } from '../store/ProductsSlice';

function CartPage() {
  const navigate = useNavigate()
  const cartProducts = useSelector(store =>store.products.cart.productList);
  const dispatch = useDispatch()
  

    return (
      <div >
        <div>
          <h1>Shopping cart</h1>
          <p>Looks like you have no items in your basket currently.</p> 
          {/* появление только в пустой корзин */}
          <button onClick={() => navigate('/products/all')}>Continue Shopping</button>
        </div>
        

        <div className='cartPlase'>
          <ul className="cartList">
            {cartProducts.map(product => (
              
              <li
              className='countner'
                key={product.id}
                onClick={() =>{
                  navigate('/products/'+product.id)
                }}>
                <img width={100} src={'http://localhost:3333'+product.image}/>
               <p> title {product.title} </p>
                <button>+</button>
                <p>count</p>
                <button>-</button>
               <p> $ price {product.price} </p>
              <p>$ {product.discont_price} </p>
              <button onClick={() => dispatch(deliteProductById(product.id))}>X</button> 

              </li>
            ))}
          </ul>
          
        <div className="cartDiscountForm">
          <h1>Order details</h1>
          <h2>{} items</h2>
          <h2>Total</h2>
          <h1>$</h1>
          <form className='discountAutoForm'>
          <fieldset>
            <ul>
              <li>
              <input type="text" name="name" id="name_1" placeholder="Name" />
              </li>
              <li>
              <input type="tel" name="phone" id="phone_1" placeholder="Phone number" />
              </li>
              <li>
              <input type="email" name="email" id="email_1" placeholder="Email" />
              </li>
              <li>
                <input type="submit" name="submit" id="submitl_1" value="order"/>
                <button>Order</button>
              </li>
            </ul>
            </fieldset>
          </form>
          
      </div>
          </div>
            <Modal/>

      </div>
    );
  }
  
  export default CartPage;