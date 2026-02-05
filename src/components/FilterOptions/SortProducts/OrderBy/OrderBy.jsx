export default function OrderBy(props) {
  const { orderBy, handleFilterItems } = props;
  return (
    <div>
      <label htmlFor="order-by">Order By</label>
      <select
        name="order-by"
        id="order-by"
        value={orderBy}
        onChange={(e) =>
          handleFilterItems({ type: "orderBy", value: e.target.value })
        }
      >
        <option value="" disabled={orderBy}>
          Select Order By
        </option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}
