export default function deleteProduct(setter, id) {
  return setter((prev) => prev.filter((item) => item.id !== id));
}
