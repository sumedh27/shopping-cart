import CartItem from "../CartItem/CartItem";

export default function CartTable(props) {
  const { cart, deleteFromCart, decrementFromCart, addToCart, resetCart } =
    props;

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
        </tr>
      </thead>
      <tbody>{IteratedCartsItem}</tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="3">
            Cost
          </th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
  );
}
