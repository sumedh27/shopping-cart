import styles from "../../products.module.css";
import Rating from "./Rating";

export default function ProductMeta({ product }) {
  return (
    <div className={styles.meta}>
      <div className={styles.rating}>
        <Rating rating={product.rating.rate} />
        <span className={styles.rcount}>{product.rating.count} Reviews</span>
      </div>
      <div className={styles.stock}>In Stock</div>
    </div>
  );
}
