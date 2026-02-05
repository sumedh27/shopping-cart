import styles from "../../products.module.css";
import ProductBuy from "../ProductBuy/ProductBuy";
import ProductMeta from "../ProductMeta/ProductMeta";
import ProductStatic from "../ProductStatic/ProductStatic";

export default function ProductInfo(props) {
  const { product, addToCart } = props;

  const convertTo2 = +(product.price * 90).toFixed(2);

  return (
    <>
      <div className={styles.info}>
        <ProductStatic product={product} />
        <ProductBuy
          product={product}
          addToCart={addToCart}
          convertTo2={convertTo2}
        />
        <ProductMeta product={product} />
      </div>
    </>
  );
}
