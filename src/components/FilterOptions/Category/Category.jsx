export default function Category(props) {
  const { category, categoryOptions, handleFilterItems } = props;

  return (
    <div>
      <label htmlFor="category">Category</label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) =>
          handleFilterItems({ type: "category", value: e.target.value })
        }
      >
        {!category ? (
          <option value="default">Select Category</option>
        ) : (
          <option disabled value="default">
            Select Category
          </option>
        )}
        {categoryOptions.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </div>
  );
}
