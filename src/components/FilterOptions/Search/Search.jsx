import styles from "./search.module.css";

export default function Search(props) {
  const { handleFilterItems, search } = props;

  return (
    <div className={styles.searchContainer}>
      <label>Search</label>
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
