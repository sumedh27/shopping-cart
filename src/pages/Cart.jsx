import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem.jsx";

export default function Cart() {
  const { cart, handleDeleteCart, handleClearCart, handleUpdateQuantity } =
    useOutletContext();
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
              handleUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </>
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </main>
  );
}
