import useFetchGetReq from "../../hooks/useFetchGetReq";
import ProductItem from "../ProductItem/ProductItem";
export default function Products({ handleAddToCart }) {
  const { data, error, loading } = useFetchGetReq();

  const styles = {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(350px,100%),1fr))",
    gap: "30px",
  };

  return (
    <main style={styles}>
      {loading && <h1>Loading.....</h1>}
      {error && !loading && <h1>{error}</h1>}
      {!loading &&
        data &&
        data.map((product) => (
          <ProductItem
            key={product.id}
            products={data}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
    </main>
  );
}
