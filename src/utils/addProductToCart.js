export default function addProductToCart(setter, products, id, quantity) {
  const product = products.find((product) => id === product.id);
  if (!product) return;

  return setter((prevCart) => {
    const cartIndex = prevCart.findIndex((product) => id === product.id);
    if (cartIndex !== -1) {
      const update = [...prevCart];

      update[cartIndex] = {
        ...update[cartIndex],
        quantity: update[cartIndex].quantity + quantity,
      };

      return update;
    }
    return [...prevCart, { ...product, quantity: quantity }];
  });
}
