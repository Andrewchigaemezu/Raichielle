import style from "./SmallText.module.css";

function SmallText({ children }) {
  return <p className={style.smalltext}>{children}</p>;
}

export default SmallText;
