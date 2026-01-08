// import { useEffect, useState } from "react";
import styles from "../products.module.css";

export default function CartItem({
  cartItem,
  deleteFromCart,
  decrementFromCart,
  addToCart,
}) {
  const deleteOrDecrement = (quantity, { targetId }) => {
    return quantity === 1
      ? deleteFromCart({ targetId })
      : decrementFromCart({ targetId });
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
                value={cartItem.quantity}
                min="1"
                readOnly
              />
              <div className={styles.userBtn}>
                <button
                  className={`${styles.plus} ${styles.btn}`}
                  type="button"
                  onClick={() => addToCart({ targetId: cartItem.id })}
                >
                  +
                </button>
                <button
                  className={`${styles.minus} ${styles.btn}`}
                  type="button"
                  onClick={() => {
                    deleteOrDecrement(cartItem.quantity, {
                      targetId: cartItem.id,
                    });
                  }}
                >
                  -
                </button>
              </div>
              <button
                className={`${styles.addToCart} ${styles.btn}`}
                type="button"
                onClick={() => {
                  deleteFromCart({ targetId: cartItem.id });
                }}
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
