import Products from "../components/Products/Products.jsx";

export default function Shop({ handleAddToCart }) {
  return <Products handleAddToCart={handleAddToCart} />;
}
