import { useOutletContext } from "react-router";

export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <>
      {cart.length ? (
        <h1>Found Items in Cart</h1>
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </>
  );
}
