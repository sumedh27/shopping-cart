import Category from "./Category/Category";
import Search from "./Search/Search";
import SortProducts from "./SortProducts/SortProducts";

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

  const categoryOptions = products.reduce((options, product) => {
    const productCategory =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);
    if (options.indexOf(productCategory) === -1) {
      options.push(productCategory);
    }
    return options;
  }, []);

  return (
    <div>
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
