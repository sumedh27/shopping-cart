import { useState } from "react";
import ProductImg from "./ProductImg/ProductImg";
import styles from "../products.module.css";
import ProductInfo from "./ProductInfo/ProductInfo";

export default function ProductItem({ product, addToCart }) {
  const [isSale] = useState(() => Math.random() < 0.5);
  return (
    <div className={styles.card} id="product-card">
      <div className={styles.tilt}>
        <ProductImg productImg={product.image} isSale={isSale} />
        <ProductInfo product={product} addToCart={addToCart} />
      </div>
    </div>
  );
}
