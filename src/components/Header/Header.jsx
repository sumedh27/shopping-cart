import { NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Sidebar({ cart }) {
  return (
    <header className={styles.header} id="sidebar">
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/shop`}
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/cart`}
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              Cart {cart.length}
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>Shopping Cart</h1>
    </header>
  );
}
