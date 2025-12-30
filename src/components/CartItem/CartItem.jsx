import { useEffect, useState } from "react";
import styles from "../products.module.css";

export default function CartItem({
  cartItem,
  handleDeleteCart,
  handleUpdateQuantity,
}) {
  const [value, setValue] = useState(cartItem.quantity);

  useEffect(() => {
    if (value !== cartItem.quantity) {
      handleUpdateQuantity(cartItem.id, value);
    }
  }, [value, cartItem, handleUpdateQuantity]);

  const handleOnChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => Math.max(1, prev - 1));
  };

  const convertTo2 = +(cartItem.price * 90).toFixed(2);

  return (
    <div className={styles.card}>
      <div className={styles.tilt}>
        <div className={styles.img}>
          <img src={cartItem.image} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{cartItem.title}</h2>
          <div className={styles.feats}>
            <span className={styles.feat}>{cartItem.category}</span>
          </div>
          <div className={styles.bottom}>
            <div className={styles.price}>
              <span className={styles.new}>Rs. {convertTo2}</span>
            </div>
            <form className={styles.user}>
              <input
                type="number"
                id="cartQuantity"
                name="cartQuantity"
                value={value}
                onChange={handleOnChange}
                min="1"
              />
              <div className={styles.userBtn}>
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
                  onClick={() => {
                    handleDecrement();
                    handleUpdateQuantity(cartItem.id, value);
                  }}
                >
                  -
                </button>
              </div>
              <button
                className={`${styles.addToCart} ${styles.btn}`}
                type="button"
                onClick={() => handleDeleteCart(cartItem.id)}
              >
                Remove Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
