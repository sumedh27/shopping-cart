import styles from "./cartItem.module.css";

export default function CartItem(props) {
  const {
    itemNum,
    quantity,
    cartItem,
    deleteFromCart,
    decrementFromCart,
    addToCart,
  } = props;

  const convertTo2 = +(cartItem.price * 90).toFixed(2);

  const deleteOrRemove = (quantity, { targetId }) =>
    quantity === 1
      ? deleteFromCart({ targetId })
      : decrementFromCart({ targetId });

  return (
    <div className={styles.cartItemsWrapper}>
      <h5 className={styles.cartSrNo}>{itemNum}</h5>
      <img className={styles.itemImage} src={cartItem.image} alt="cart image" />
      <div className={styles.cartTitle}>{cartItem.title}</div>
      <div className={styles.cartChange}>
        <button
          className={`${styles.btn} ${styles.inputBtn} ${styles.decBtn}`}
          onClick={() => deleteOrRemove(quantity, { targetId: cartItem.id })}
        >
          -
        </button>
        <input
          className={styles.cartQty}
          type="number"
          key={quantity}
          defaultValue={quantity}
          disabled
        />
        <button
          className={`${styles.btn} ${styles.inputBtn} ${styles.incBtn}`}
          onClick={() => addToCart({ targetId: cartItem.id })}
        >
          +
        </button>
      </div>
      <h4 className={styles.cartPrice}>Rs.{convertTo2}</h4>
      <button
        className={`${styles.btn} ${styles.removeFromBtn}`}
        onClick={() => deleteFromCart({ targetId: cartItem.id })}
      >
        Remove from cart
      </button>
    </div>
  );
}
