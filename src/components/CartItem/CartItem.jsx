import Button from "../Button/Button";
import styles from "./cartItem.module.css";

export default function CartItem(props) {
  const {
    itemNum,
    quantity,
    cartItem,
    deleteFromCart,
    decrementFromCart,
    addToCart,
  } = props;

  const convertTo2 = +(cartItem.price * 90).toFixed(2);

  const deleteOrRemove = (quantity, { targetId }) =>
    quantity === 1
      ? deleteFromCart({ targetId })
      : decrementFromCart({ targetId });

  const handleDeleteOrRemove = () =>
    deleteOrRemove(quantity, { targetId: cartItem.id });

  const handleAddToCart = () => addToCart({ targetId: cartItem.id });

  const handleDeleteFromCart = () => deleteFromCart({ targetId: cartItem.id });
  return (
    <div className={styles.cartItemsWrapper}>
      {/* <div className={styles.srNo}>
        <h5>{itemNum}</h5>
      </div> */}
      <div className={styles.itemImage}>
        <img src={cartItem.image} alt="cart image" />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productTop}>
          <div>
            <p>{cartItem.title}</p>
            <small>Product Price: Rs.{convertTo2}</small>
          </div>
          <div className={styles.productChange}>
            <Button className={`btn leftMinus`} onClick={handleDeleteOrRemove}>
              -
            </Button>
            <input
              className={styles.cartQty}
              type="number"
              key={quantity}
              defaultValue={quantity}
              disabled
            />
            <Button className={`btn rightPlus`} onClick={handleAddToCart}>
              +
            </Button>
          </div>
        </div>
        <div className={styles.productBottom}>
          <Button className={`btn cartPageBtn`} onClick={handleDeleteFromCart}>
            Remove From Cart
          </Button>
          <h4 className={styles.cartPrice}>
            Rs.{convertTo2 * cartItem.quantity}
          </h4>
        </div>
      </div>
    </div>
  );
}
