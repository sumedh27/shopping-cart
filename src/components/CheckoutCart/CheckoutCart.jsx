import styles from "./checkoutCart.module.css";

function CheckoutCart({ cartTotal }) {
  return (
    <section className={styles.checkoutCart}>
      <div>
        <h4>Estimated Cost</h4>
      </div>
      <div>
        <h3>
          Cost <span>{cartTotal}</span>
        </h3>
      </div>
      <div>
        <h3>
          Total <span>{cartTotal}</span>
        </h3>
      </div>
    </section>
  );
}

export default CheckoutCart;
