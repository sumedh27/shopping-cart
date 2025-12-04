import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <>
      {cart.length ? (
        cart.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </>
  );
}
