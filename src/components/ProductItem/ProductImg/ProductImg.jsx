import styles from "../../products.module.css";

export default function ProductImg(props) {

  const { productImg, isSale } = props;

  return (
    <>
      {isSale && <div className={styles.badge}>HOT SALE</div>}
      <div className={styles.img}>
        <img src={productImg} />
      </div>
    </>
  );
}
