import Products from "../components/Products/Products.jsx";
import Search from "../components/Search/Search.jsx";

export default function Shop(props) {
  const {
    handleAddToCart,
    products,
    isLoading,
    error,
    addToCart,
    filterItemsMethods,
    handleFilterItems,
  } = props;
  return (
    <main>
      <Search
        filterItemsMethods={filterItemsMethods}
        handleFilterItems={handleFilterItems}
      />
      <Products
        handleAddToCart={handleAddToCart}
        products={products}
        isLoading={isLoading}
        error={error}
        addToCart={addToCart}
        filterItemsMethods={filterItemsMethods}
      />
    </main>
  );
}
