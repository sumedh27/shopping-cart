import Products from "../components/Products/Products.jsx";
import FilterOptions from "../components/FilterOptions/FilterOptions.jsx";
import Search from "../components/FilterOptions/Search/Search.jsx";

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
      <FilterOptions
        filterItemsMethods={filterItemsMethods}
        handleFilterItems={handleFilterItems}
        products={products}
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
