import React from "react";
import style from "./card-style.css";

const Card = ({ title, children }) => {
  return (
    <div className={`${style.card} text-center `}>
      <div className={style.title}>{title}</div>
      <div className={style.body}>{children}</div>
    </div>
  );
};
export default Card;
