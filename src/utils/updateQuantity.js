export default function updateQuantity(setter, id, newQuantity) {
  return setter((prevCart) => {
    const update = [...prevCart];
    const cartIndex = prevCart.findIndex((product) => id === product.id);

    if (cartIndex === -1) return update;
    
    update[cartIndex] = { ...update[cartIndex], quantity: newQuantity };

    return update;
  });
}
