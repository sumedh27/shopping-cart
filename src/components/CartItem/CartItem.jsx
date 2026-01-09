import styles from "./cartItem.module.css";

export default function CartItem({
  itemNum,
  cartItem,
  deleteFromCart,
  decrementFromCart,
  addToCart,
}) {
  const deleteOrDecrement = (quantity, { targetId }) => {
    return quantity === 1
      ? deleteFromCart({ targetId })
      : decrementFromCart({ targetId });
  };

  const convertTo2 = +(cartItem.price * 90).toFixed(2);

  return (
    <tr>
      <th scope="row">{itemNum}</th>
      <td>
        <img
          className={styles.cartImage}
          src={cartItem.image}
          alt="product image"
        />
      </td>
      <td>{cartItem.title}</td>
      <td>
        <button
          onClick={() =>
            deleteOrDecrement(cartItem.quantity, { targetId: cartItem.id })
          }
        >
          -
        </button>
      </td>
      <td>{cartItem.quantity}</td>
      <td>
        <button onClick={() => addToCart({ targetId: cartItem.id })}>+</button>
      </td>
      <td>{convertTo2}</td>
      <td>
        <button onClick={() => deleteFromCart({ targetId: cartItem.id })}>
          Remove From Cart
        </button>
      </td>
    </tr>
  );
}
