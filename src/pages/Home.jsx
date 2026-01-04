import { Link } from "react-router";
import HomeCart from "../assests/HomeCartSVG.jsx";

export default function Home() {
  return (
    <>
      <main>
        <h1>
          Welcome to{" "}
          <span style={{ color: "var(--primary-500)" }}>Shopping Cart</span>
        </h1>
        <h3>A SIMPLE REACT PROJECT</h3>
        <HomeCart />
        <Link to={`/shop`}>
          <button>Shop Now</button>
        </Link>
      </main>
    </>
  );
}
