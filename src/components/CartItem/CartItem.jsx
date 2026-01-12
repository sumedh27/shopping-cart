import styles from "./cartItem.module.css";
import pStyles from "../CartTable/cartTable.module.css";

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
          className={pStyles.btn}
          onClick={() =>
            deleteOrDecrement(cartItem.quantity, { targetId: cartItem.id })
          }
        >
          -
        </button>
      </td>
      <td>{cartItem.quantity}</td>
      <td>
        <button
          className={pStyles.btn}
          onClick={() => addToCart({ targetId: cartItem.id })}
        >
          +
        </button>
      </td>
      <td>Rs. {convertTo2}</td>
      <td>
        <button
          className={pStyles.btn}
          onClick={() => deleteFromCart({ targetId: cartItem.id })}
        >
          Remove From Cart
        </button>
      </td>
    </tr>
  );
}
