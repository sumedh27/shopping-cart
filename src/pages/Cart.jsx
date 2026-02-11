import CheckoutCart from "../components/CheckoutCart/CheckoutCart.jsx";
import CartList from "../components/CartList/CartList.jsx";
import styles from "./cart.module.css";
import { useCallback } from "react";

export default function Cart(props) {
  const { cart, deleteFromCart, decrementFromCart, addToCart, resetCart } =
    props;

  const getCartTotal = useCallback((cart) => {
    let total = 0;
    for (let product of cart) {
      total += product.price * product.quantity;
    }

    return +(total * 90).toFixed(3);
  }, []);

  const cartTotal = getCartTotal(cart);

  return (
    <main className={styles.cartMain}>
      {cart.length > 0 ? (
        <>
          <CartList
            cart={cart}
            deleteFromCart={deleteFromCart}
            decrementFromCart={decrementFromCart}
            addToCart={addToCart}
            resetCart={resetCart}
            cartTotal={cartTotal}
          />
          <CheckoutCart cartTotal={cartTotal} />
        </>
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </main>
  );
}
