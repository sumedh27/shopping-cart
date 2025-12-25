import { useState } from "react";
import styles from "./ProductItem.module.css";

export default function ProductItem({ products, product, handleAddToCart }) {
  const [value, setValue] = useState(1);

  const handleOnChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => {
      if (prev === 1 || !prev) return prev;

      return prev - 1;
    });
  };

  const convertTo2 = +(product.price * 90).toFixed(2);

  return (
    <div className={styles.card} id="product-card">
      <div className={styles.badge}>HOT SALE</div>
      <div className={styles.tilt}>
        <div className={styles.img}>
          <img src={product.image} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.feats}>
            <span className={styles.feat}>{product.category}</span>
          </div>
          <div className={styles.bottom}>
            <div className={styles.price}>
              <span className={styles.new}>Rs. {convertTo2}</span>
            </div>
            <form className={styles.user}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={value}
                onChange={handleOnChange}
                min="1"
              />
              <div className="styles userBtn">
                <button
                  className={`${styles.plus} ${styles.btn}`}
                  type="button"
                  onClick={handleIncrement}
                >
                  +
                </button>
                <button
                  className={`${styles.minus} ${styles.btn}`}
                  type="button"
                  onClick={handleDecrement}
                >
                  -
                </button>
              </div>
              <button
                className={`${styles.addToCart} ${styles.btn}`}
                type="button"
                onClick={() => {
                  handleAddToCart(products, product.id, value);
                  setValue(1);
                }}
              >
                <span>Add to cart</span>
                <svg
                  className={styles.icon}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </button>
            </form>
          </div>
          <div className={styles.meta}>
            <div className={styles.rating}>
              <span className={styles.rcount}>Reviews</span>
            </div>
            <div className={styles.stock}>In Stock</div>
          </div>
        </div>
      </div>
    </div>
  );
}
