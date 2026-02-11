import styles from "./button.module.css";

export default function Button(props) {
  const { className, children, onClick, disabled } = props;
  const classes = className.split(" ").map((style) => styles[style]);

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={classes.join(" ")}
    >
      {children}
    </button>
  );
}
