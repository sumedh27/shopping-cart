import Select from "react-select";
import styles from "./category.module.css";

export default function Category(props) {
  const { category, categoryOptions, handleFilterItems } = props;
  const selectedCategory =
    categoryOptions.find((opt) => opt.value === category) || null;

  return (
    <div className={styles.categoryContainer}>
      <label htmlFor="category">Category</label>
      <Select
        name="category"
        value={selectedCategory}
        options={categoryOptions}
        placeholder="Select Category"
        onChange={(e) => {
          handleFilterItems({ type: "category", value: e.value });
        }}
      />
    </div>
  );
}
