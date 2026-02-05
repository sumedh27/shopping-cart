import { Link } from "react-router";
import styles from "./home.module.css";
import HomeCart from "../assests/HomeCartSVG.jsx";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.content}>
          <h1>
            Simple <span>Shopping Cart</span> 
          </h1>
          <p>
            A minimal React project
          </p>
          <div className={styles.actions}>
            <Link to="/shop" className={styles.primaryBtn}>
              Shop Now
            </Link>
          </div>
        </div>
        <HomeCart className={styles.bgSvg} />
      </main>
    </>
  );
}
