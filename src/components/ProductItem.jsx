export default function ProductItem({ product }) {
  return (
    <div id="product-card">
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
}
