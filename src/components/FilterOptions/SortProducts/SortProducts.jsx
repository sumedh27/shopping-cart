import OrderBy from "./OrderBy/OrderBy";
import SortBy from "./SortBy/SortBy";

export default function SortProducts(props) {
  const { sortBy, orderBy, handleFilterItems } = props;

  return (
    <div>
      <OrderBy orderBy={orderBy} handleFilterItems={handleFilterItems} />
      <SortBy
        orderBy={orderBy}
        sortBy={sortBy}
        handleFilterItems={handleFilterItems}
      />
    </div>
  );
}
