export default function deleteProduct(setter, id) {
  setter((prev) => prev.filter((item) => item.id !== id));
}
