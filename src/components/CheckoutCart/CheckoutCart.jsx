import Button from "../Button/Button";
import styles from "./checkoutCart.module.css";

function CheckoutCart({ cartTotal }) {
  return (
    <section className={styles.checkoutCart}>
      <div>
        <h4>Estimated Cost</h4>
      </div>
      <ul className={styles.checkoutList}>
        <li>
          <span>Subtotal</span>
          <span>Rs.{cartTotal}</span>
        </li>
        <li>
          <span>Shipping</span>
          <span>Free</span>
        </li>
        <li className={styles.total}>
          <span>Total amount (including taxes)</span>
          <span>Rs.{cartTotal}</span>
        </li>
      </ul>
      <Button disabled={true} className={`btn checkoutBtn`}>
        Checkout
      </Button>
    </section>
  );
}

export default CheckoutCart;
