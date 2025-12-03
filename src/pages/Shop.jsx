import { useOutletContext } from "react-router";
import Products from "../components/Products";

export default function Shop() {
  const { addToCart } = useOutletContext();
  return <Products />;
}
