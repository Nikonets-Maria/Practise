import {Routes, Route, Form} from 'react-router-dom'


import Header from "./components/Header";
import HomePage from './pages/HomePage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductItemPage from './pages/ProductItemPage';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductsFromCategoriPage from './pages/ProductsFromCategoriPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/allcategories" element={<AllCategoriesPage/>}/>
            <Route path="/products/category" element={<ProductsFromCategoriPage type='category'/>}/>
            <Route path="/products/sale" element={<ProductsFromCategoriPage type='sale'/>}/>
            <Route path="/products/all" element={<ProductsFromCategoriPage type='all'/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/products/:id" element={<ProductItemPage/>}/>
            <Route path="/modal" element={<Form/>}/>

        </Routes> 
        <Footer/>
      </div>
    </Provider>
    
  );
}

export default App;
