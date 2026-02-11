import removeDuplicates from "../../utils/removeDuplicates";
import Category from "./Category/Category";
import Search from "./Search/Search";
import SortProducts from "./SortProducts/SortProducts";
import styles from "./filterOptions.module.css";

export default function FilterOptions(props) {
  const { filterItemsMethods, handleFilterItems, products } = props;

  const { search, category, orderBy, sortBy } = filterItemsMethods;

  const resetFilter = () => {
    const defaultItems = {
      search: "",
      category: "",
      orderBy: "",
      sortBy: "high",
    };
    handleFilterItems({ type: "", value: defaultItems });
  };

  const areFilterOptionsEmpty = () => !search && !category && !orderBy;

  const productCategories = removeDuplicates(
    products.map((product) => product.category),
  );

  const categoryOptions = productCategories.map((option) => {
    const optionLabel = option.charAt(0).toUpperCase() + option.slice(1);

    return { label: optionLabel, value: option };
  });

  return (
    <div className={styles.filterContainer}>
      <Search search={search} handleFilterItems={handleFilterItems} />
      <Category
        category={category}
        categoryOptions={categoryOptions}
        handleFilterItems={handleFilterItems}
      />
      <SortProducts
        sortBy={sortBy}
        orderBy={orderBy}
        handleFilterItems={handleFilterItems}
      />
      {
        <button onClick={resetFilter} disabled={areFilterOptionsEmpty()}>
          Reset
        </button>
      }
    </div>
  );
}
