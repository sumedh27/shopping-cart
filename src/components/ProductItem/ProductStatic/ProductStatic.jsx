import styles from "../../products.module.css";

export default function ProductStatic({ product }) {
  return (
    <>
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.desc}>{product.description}</p>
      <div className={styles.feats}>
        <span className={styles.feat}>{product.category}</span>
      </div>
    </>
  );
}
