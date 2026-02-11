import styles from "./cartList.module.css";
import CartItem from "../CartItem/CartItem";

export default function CartList(props) {
  const {
    cart,
    deleteFromCart,
    decrementFromCart,
    addToCart,
    resetCart,
    cartTotal,
  } = props;

  const IteratedCartItem = cart.map((item, i) => {
    return (
      <CartItem
        key={item.id}
        itemNum={i + 1}
        quantity={item.quantity}
        cartItem={item}
        deleteFromCart={deleteFromCart}
        decrementFromCart={decrementFromCart}
        addToCart={addToCart}
      />
    );
  });

  return (
    <section className={styles.cartList}>
      <div className={styles.cartHeader}>
        <h4>
          Cart <span className={styles.cartLen}>({cart.length} items)</span>
        </h4>
      </div>
      <div className={styles.cartMain}>{IteratedCartItem}</div>
      <div className={styles.cartFooter}>
        <h4 className={styles.cartCostT}>Total</h4>
        <p className={styles.cartCost}>Rs.{cartTotal}</p>
        <button
          className={`${styles.resetCartBtn} ${styles.btn}`}
          onClick={() => resetCart()}
        >
          Reset Cart
        </button>
      </div>
    </section>
  );
}
