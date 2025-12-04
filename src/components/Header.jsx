import { NavLink } from "react-router";

export default function Sidebar({ cart }) {
  return (
    <header id="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/shop`}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={`/cart`}>Cart {cart.length}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
