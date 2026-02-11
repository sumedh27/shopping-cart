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

  const IteratedCartItem = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        quantity={item.quantity}
        cartItem={item}
        deleteFromCart={deleteFromCart}
        decrementFromCart={decrementFromCart}
        addToCart={addToCart}
      />
    );
  });

  const handleResetCart = (e) => {
    e.preventDefault();
    resetCart();
  };

  return (
    <section className={styles.cartList}>
      <div className={styles.cartHeader}>
        <h4>
          Cart <span className={styles.cartLen}>({cart.length} items)</span>
        </h4>
        <a href="" onClick={handleResetCart}>
          Reset Cart
        </a>
      </div>
      <div className={styles.cartMain}>{IteratedCartItem}</div>
    </section>
  );
}
