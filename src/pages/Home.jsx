import { Link } from "react-router";
import styles from "./home.module.css";
import bg from "/assets/home-asset.jpg";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.content}>
          <h1>
            Simple <span>Shopping Cart</span>
          </h1>
          <p>A minimal React project</p>
          <div className={styles.actions}>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <Button className={"btn"}>Shop Now</Button>
            </Link>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.bgImg} src={bg} alt="image" />
        </div>
      </main>
    </>
  );
}
