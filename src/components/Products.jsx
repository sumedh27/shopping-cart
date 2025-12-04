import useFetchGetReq from "../hooks/useFetchGetReq";
import ProductItem from "./ProductItem";

export default function Products({ handleAddToCart }) {
  const { data, error, loading } = useFetchGetReq();

  return (
    <>
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
    </>
  );
}
