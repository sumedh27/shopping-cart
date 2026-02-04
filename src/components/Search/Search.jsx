export default function Search(props) {
  const { handleFilterItems, filterItemsMethods } = props;
  const { search } = filterItemsMethods;

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          handleFilterItems({ type: "search", value: e.target.value });
        }}
      />
    </div>
  );
}
