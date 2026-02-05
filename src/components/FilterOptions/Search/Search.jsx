export default function Search(props) {
  const { handleFilterItems, search } = props;

  return (
    <div>
      <h3>Search</h3>
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
