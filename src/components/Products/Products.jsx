import { useMemo } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function Products(props) {
  const { handleAddToCart, products, isLoading, error, addToCart, search } =
    props;

  const filteredProducts = useMemo(() => {
    if (!search?.trim()) return products;

    if (search) {
      const lowerCaseSearch = search.toLowerCase();

      return products.filter((product) =>
        ["title", "category"].some((key) =>
          product[key]?.toLowerCase().includes(lowerCaseSearch),
        ),
      );
    }
  }, [products, search]);

  const styles = {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(350px,100%),1fr))",
    gap: "30px",
  };

  return (
    <div style={styles}>
      {isLoading && <h1>Loading.....</h1>}
      {error && !isLoading && <h1>{error}</h1>}
      {!isLoading &&
        filteredProducts &&
        filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            products={filteredProducts}
            product={product}
            handleAddToCart={handleAddToCart}
            addToCart={addToCart}
          />
        ))}
    </div>
  );
}
