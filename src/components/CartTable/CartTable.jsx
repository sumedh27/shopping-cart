import CartItem from "../CartItem/CartItem";

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
    <table>
      <thead>
        <tr>
          <th scope="col" colSpan="4">
            Cart{" "}
          </th>
          <td>
            {cart.length === 1
              ? `(${cart.length} item)`
              : `(${cart.length} items)`}
          </td>
        </tr>
      </thead>
      <tbody>{IteratedCartsItem}</tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="6">
            <button onClick={() => resetCart()}>Clear Cart</button>
            Cost
          </th>
          <td>Rs. {cartTotal}</td>
        </tr>
      </tfoot>
    </table>
  );
}
