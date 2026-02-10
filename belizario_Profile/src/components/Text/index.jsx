import styles from "../../style/app.module.css";
export default function Text({ text, ...rest }) {
  return (
    <p className={styles.text} {...rest}>
      {text}
    </p>
  );
}
