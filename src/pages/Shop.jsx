import Products from "../components/Products/Products.jsx";

export default function Shop(props) {
  const { handleAddToCart, products, isLoading, error, addToCart } = props;
  return (
    <Products
      handleAddToCart={handleAddToCart}
      products={products}
      isLoading={isLoading}
      error={error}
      addToCart={addToCart}
    />
  );
}
