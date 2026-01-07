import ProductItem from "../ProductItem/ProductItem";
export default function Products(props) {
  const { handleAddToCart, products, isLoading, error } = props;
  const styles = {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(350px,100%),1fr))",
    gap: "30px",
  };

  return (
    <main style={styles}>
      {isLoading && <h1>Loading.....</h1>}
      {error && !isLoading && <h1>{error}</h1>}
      {!isLoading &&
        products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            products={products}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
    </main>
  );
}
