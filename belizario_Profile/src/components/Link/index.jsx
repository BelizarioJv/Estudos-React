import styles from "../../style/app.module.css";
export default function Link({ text, link }) {
  return (
    <a
      className={styles.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      {text}
    </a>
  );
}
