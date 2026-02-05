import { useMemo } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function Products(props) {
  const {
    handleAddToCart,
    products,
    isLoading,
    error,
    addToCart,
    filterItemsMethods,
  } = props;

  const filteredProducts = useMemo(() => {
    const { search, category, orderBy, sortBy } = filterItemsMethods;

    let copyProducts = [...products];

    if (!search?.trim() && !category?.trim() && !orderBy?.trim())
      return products;

    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      copyProducts = copyProducts.filter((product) =>
        ["title", "category"].some((key) =>
          product[key]?.toLowerCase().includes(lowerCaseSearch),
        ),
      );
    }

    if (category) {
      const lowerCaseCategory = category.toLowerCase();

      copyProducts = copyProducts.filter(
        (product) => product.category.toLowerCase() === lowerCaseCategory,
      );
    }

    if (orderBy) {
      if (orderBy === "price" && sortBy === "high") {
        copyProducts = copyProducts.sort((a, b) => b.price - a.price);
      } else if (orderBy === "price" && sortBy === "low") {
        copyProducts = copyProducts.sort((a, b) => a.price - b.price);
      } else if (orderBy === "rating" && sortBy === "high") {
        copyProducts = copyProducts.sort(
          (a, b) => b.rating.rate - a.rating.rate,
        );
      } else if (orderBy === "rating" && sortBy === "low") {
        copyProducts = copyProducts.sort(
          (a, b) => a.rating.rate - b.rating.rate,
        );
      } else if (orderBy === "title" && sortBy === "low") {
        copyProducts = copyProducts.sort((a, b) => {
          const nameA = a.title[0].toLowerCase();
          const nameB = b.title[0].toLowerCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
      } else if (orderBy === "title" && sortBy === "high") {
        copyProducts = copyProducts.sort((a, b) => {
          const nameA = a.title[0].toLowerCase();
          const nameB = b.title[0].toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    }

    return copyProducts;
  }, [products, filterItemsMethods]);

  const styles = {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(350px,100%),1fr))",
    gap: "30px",
  };

  return (
    <div style={styles}>
      {isLoading && <h1>Loading.....</h1>}
      {error && !isLoading && <h1>{error}</h1>}
      {!isLoading &&
        filteredProducts &&
        filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            products={filteredProducts}
            product={product}
            handleAddToCart={handleAddToCart}
            addToCart={addToCart}
          />
        ))}
    </div>
  );
}
