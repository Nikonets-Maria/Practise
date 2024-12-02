import { NavLink } from "react-router-dom";



function Header() {

    return (
      <div className="header">
          <div className="logo"></div>
          <ul className="menu_wrapper">
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/'}><li>Main Page</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/allcategories'}><li>Categories</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/categoritem'}><li>All products</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/categoritem'}><li>All sales</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/cart'}><li>Cart</li></NavLink>
           </ul>
           <div className="cart"></div>

      </div>
    );
  }
  
  export default Header;