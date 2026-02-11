import Select from "react-select";

export default function SortBy(props) {
  const { sortBy, orderBy, handleFilterItems } = props;

  const sortOptions = [
    { label: "High", value: "high" },
    { label: "Low", value: "low" },
  ];

  const sortValues =
    sortOptions.find((option) => option.value === sortBy) || null;

  return (
    <div>
      <label htmlFor="sort-by">Sort By</label>
      <Select
        name="sort-by"
        isDisabled={!orderBy}
        options={sortOptions}
        value={sortValues}
        placeholder="Select Sort By"
        onChange={(e) => handleFilterItems({ type: "sortBy", value: e.value })}
      />
    </div>
  );
}
