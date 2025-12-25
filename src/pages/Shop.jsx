import { useOutletContext } from "react-router";
import Products from "../components/Products/Products.jsx";

export default function Shop() {
  const { handleAddToCart } = useOutletContext();
  return <Products handleAddToCart={handleAddToCart} />;
}
