import { useState } from "react";
import styles from "../../products.module.css";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

export default function ProductBuy({ product, convertTo2, addToCart }) {
  const [value, setValue] = useState(1);

  const handleOnChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => {
      if (prev === 1 || !prev) return prev;

      return prev - 1;
    });
  };

  const handleOnClickAdd = () => {
    addToCart({ targetId: product.id, targetQuantity: value });
    setValue(1);
  };

  const addToCartClass = `btn cartBtn addToCart icon`;
  const incrementClass = `btn plus`;
  const decrementClass = `btn minus`;

  return (
    <div className={styles.bottom}>
      <div className={styles.price}>
        <span className={styles.new}>Rs. {convertTo2}</span>
      </div>
      <form className={styles.user}>
        <input
          type="text"
          id="quantity"
          name="quantity"
          pattern="[0-9]*"
          value={value}
          onChange={handleOnChange}
          min="1"
        />
        <div className="styles userBtn">
          <Button className={incrementClass} onClick={handleIncrement}>
            +
          </Button>
          <Button className={decrementClass} onClick={handleDecrement}>
            -
          </Button>
        </div>
        <Button className={addToCartClass} onClick={handleOnClickAdd}>
          <span>Add to Cart</span>
          <Icon className="icon" />
        </Button>
      </form>
    </div>
  );
}
