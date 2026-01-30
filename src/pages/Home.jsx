import { Link } from "react-router";
import styles from "./home.module.css";
import HomeCart from "../assests/HomeCartSVG.jsx";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div>
          <h1>
            Welcome to{" "}
            <span style={{ color: "var(--primary-500)" }}>Shopping Cart</span>
          </h1>
          <h3>A SIMPLE REACT PROJECT</h3>
          <Link to={`/shop`}>Shop Now</Link>
        </div>
        <HomeCart />
      </main>
    </>
  );
}
