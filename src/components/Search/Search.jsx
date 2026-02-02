export default function Search(props) {
  const { search, setSearch } = props;

  const handleSearch = (e) => {
    return setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
    </div>
  );
}
