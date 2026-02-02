import Products from "../components/Products/Products.jsx";
import Search from "../components/Search/Search.jsx";

export default function Shop(props) {
  const {
    handleAddToCart,
    products,
    isLoading,
    error,
    addToCart,
    search,
    setSearch,
  } = props;
  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <Products
        handleAddToCart={handleAddToCart}
        products={products}
        isLoading={isLoading}
        error={error}
        addToCart={addToCart}
        search={search}
      />
    </main>
  );
}
