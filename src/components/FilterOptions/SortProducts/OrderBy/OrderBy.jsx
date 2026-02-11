import Select from "react-select";

export default function OrderBy(props) {
  const { orderBy, handleFilterItems } = props;
  const orderOptions = [
    { label: "Price", value: "price" },
    { label: "Rating", value: "rating" },
    { label: "Title", value: "title" },
  ];

  const orderValues =
    orderOptions.find((option) => option.value === orderBy) || null;

  return (
    <div>
      <label htmlFor="order-by">Order By</label>
      <Select
        name="order-by"
        placeholder="Select Order By"
        options={orderOptions}
        value={orderValues}
        onChange={(e) => handleFilterItems({ type: "orderBy", value: e.value })}
      />
    </div>
  );
}
