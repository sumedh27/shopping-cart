import { NavLink } from "react-router";

export default function Sidebar({ cart }) {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/shop`}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={`/cart`}>Cart {cart}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
