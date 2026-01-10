import CheckoutCart from "../components/CheckoutCart/CheckoutCart.jsx";
import CartTable from "../components/CartTable/CartTable.jsx";
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

  const style = {
    padding: "2rem",
    display: "flex",
    gap: "30px",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };
  return (
    <main style={style}>
      {cart.length > 0 ? (
        <>
          <CartTable
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
