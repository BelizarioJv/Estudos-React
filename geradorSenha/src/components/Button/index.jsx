import style from "../../style/app.module.css";

export default function Button({ texto, ...rest }) {
  return (
    <button {...rest} className={style.button}>
      {texto}
    </button>
  );
}
