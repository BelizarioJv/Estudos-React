import { useState } from "react";
import style from "../../style/app.module.css";

export default function Input({
  label,
  idLabel,
  type,
  id,
  min,
  max,
  value,
  onChange,
}) {
  return (
    <div className={style.inputContainer}>
      <label htmlFor={idLabel}>{label}</label>
      <input
        className={style.inputSizepassword}
        type={type}
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
