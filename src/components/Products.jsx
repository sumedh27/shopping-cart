import products from "../utils/dummyProducts";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}
