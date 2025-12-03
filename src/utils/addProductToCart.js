import products from "./dummyProducts";

export default function addProductToCart(setter, id, quantity) {
  const product = products.find((product) => id === product.id);
  if (!product) return;

  return setter((prevCart) => [
    ...prevCart,
    { ...product, quantity: quantity },
  ]);
}
