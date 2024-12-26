import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchSaleProducts } from "../asyncActions/data";
import { useNavigate } from "react-router-dom";
import { filterProductsByDiscount, filterProductsByMaxPrice, filterProductsByMinPrice, sortProductsByDate, sortProductsById, sortProductsByMinPrice, sortProductsByMaxPrice, addProductToCart } from "../store/ProductsSlice";

function ProductsFromCategoriPage(props) {
  const { type } = props;
  const products = useSelector(store => store.products.data);
  const filtredProducts = products.filter(elem => elem.isShow === true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'all') {
      dispatch(fetchAllProducts());
      console.log(type);
    } else if (type === 'sale') {
      dispatch(fetchSaleProducts());
      console.log(type);
    }
  }, [type, dispatch]);

  function handelAddToCart(event, product) {
    event.stopPropagation();
    dispatch(addProductToCart({ id: product.id, count: 1 }));
  }

  // Обработчик изменения сортировки
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case 'default':
        dispatch(sortProductsById());
        break;
      case 'newest':
        dispatch(sortProductsByDate());
        break;
      case 'highLow':
        dispatch(sortProductsByMaxPrice());
        break;
      case 'lowHigh':
        dispatch(sortProductsByMinPrice(products.p)); // Убедитесь, что products.p доступен
        break;
      default:
        break;
    }
  };

  return (
    <div className="mainContent">
      <div className="filter">
        <form className="filterForm">
          <label>
            Price  
            <input id='minPrice' type="number" min="0" placeholder="from" 
              onChange={() => {
                dispatch(filterProductsByMinPrice(
                  document.getElementById('minPrice').value) || 0);
              }} 
            /> 
          </label>
          <label>
            <input id='maxPrice' type="number" min="0" placeholder="to" 
              onChange={() => {
                dispatch(filterProductsByMaxPrice(
                  document.getElementById('maxPrice').value) || Infinity);
              }} 
            /> 
          </label>
          <label>
            <p>Discounted items </p> 
            <input 
                type="checkbox" 
                onChange={(e) => { 
                    dispatch(filterProductsByDiscount(e.target.checked)); // Передаем состояние чекбокса в действие
                }} 
            />
        </label>
 
          <p>Sorted</p>
          <select id="sortOption" onChange={handleSortChange}>
            <option value="default">by default id</option>
            <option value="newest">newest date</option>
            <option value="highLow">price: high-low</option>
            <option value="lowHigh">price: low-high</option>
          </select>
        </form>
      </div>

      <div>
        <ul className="productsList">
          {filtredProducts.map(product => (
            <li
              className="productListContent"
              key={product.id}
              onClick={() => {
                navigate('/products/' + product.id);
              }}
            >
              <img width={100} src={'http://localhost:3333' + product.image} alt={product.title} />
              <p>{product.title}</p> 
              <p>${product.price}</p>
              
              <button onClick={(e) => handelAddToCart(e, product)}> Add to cart </button> 
              <p>{product.discont_price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsFromCategoriPage;
