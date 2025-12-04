import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, handleDeleteCart, handleClearCart } = useOutletContext();
  return (
    <main>
      {cart.length > 0 ? (
        <>
          <button type="button" onClick={handleClearCart}>
            Clear Cart
          </button>
          {cart.map((cartItem) => (
            <CartItem
              cartItem={cartItem}
              key={cartItem.id}
              handleDeleteCart={handleDeleteCart}
            />
          ))}
        </>
      ) : (
        // (

        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </main>
  );
}
