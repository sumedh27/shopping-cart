import CartItem from "../CartItem/CartItem";
import styles from "./cartTable.module.css";

export default function CartTable(props) {
  const {
    cart,
    deleteFromCart,
    decrementFromCart,
    addToCart,
    resetCart,
    cartTotal,
  } = props;

  const IteratedCartsItem = cart.map((cartItem, i) => {
    return (
      <CartItem
        key={cartItem.id}
        itemNum={i + 1}
        cartItem={cartItem}
        deleteFromCart={deleteFromCart}
        decrementFromCart={decrementFromCart}
        addToCart={addToCart}
        resetCart={resetCart}
      />
    );
  });

  return (
    <table className={styles.contentTable}>
      <thead>
        <tr>
          <th scope="col" colSpan="8">
            Cart{" "}
            {cart.length === 1
              ? `(${cart.length} item)`
              : `(${cart.length} items)`}
          </th>
        </tr>
      </thead>
      <tbody>{IteratedCartsItem}</tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="6">
            Cost
          </th>
          <td>Rs. {cartTotal}</td>
          <td>
            <button className={styles.btn} onClick={() => resetCart()}>
              Clear Cart
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
