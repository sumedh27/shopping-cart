import { useState } from "react";
import styles from "../../products.module.css";

export default function ProductBuy({ product, convertTo2, addToCart }) {
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

  return (
    <div className={styles.bottom}>
      <div className={styles.price}>
        <span className={styles.new}>Rs. {convertTo2}</span>
      </div>
      <form className={styles.user}>
        <input
          type="text"
          id="quantity"
          name="quantity"
          pattern="[0-9]*"
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
            addToCart({ targetId: product.id, targetQuantity: value });
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
  );
}
