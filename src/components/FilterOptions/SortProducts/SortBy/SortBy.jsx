export default function SortBy(props) {
  const { sortBy, orderBy, handleFilterItems } = props;
  return (
    <div>
      <label htmlFor="order-by">Sort By</label>
      <select
        name="order-by"
        id="order-by"
        value={sortBy}
        onChange={(e) =>
          handleFilterItems({ type: "sortBy", value: e.target.value })
        }
        disabled={!orderBy}
      >
        <option value="high">
          {orderBy === "title" ? <>Asc</> : <>High</>}
        </option>
        <option value="low">
          {orderBy === "title" ? <>Desc</> : <>Low</>}
        </option>
      </select>
    </div>
  );
}
