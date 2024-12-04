import { NavLink } from "react-router-dom";

import logoImg from '../images/logo.png'
import cartImg from '../images/emptyCart.png'


function Header() {

    return (
      <div className="header">
          <img width={40} src={logoImg}/>
          <ul className="menu_wrapper">
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/'}><li>Main Page</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/allcategories'}><li>Categories</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/categoritem'}><li>All products</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/categoritem'}><li>All sales</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/cart'}><li>Cart</li></NavLink>
           </ul>
           <img width={30} src={cartImg}/>

      </div>
    );
  }
  
  export default Header;