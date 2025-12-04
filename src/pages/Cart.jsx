import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, handleDeleteCart } = useOutletContext();
  return (
    <>
      {cart.length ? (
        cart.map((cartItem) => (
          <CartItem
            cartItem={cartItem}
            key={cartItem.id}
            handleDeleteCart={handleDeleteCart}
          />
        ))
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </>
  );
}
