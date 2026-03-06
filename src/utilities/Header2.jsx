import style from "./Header2.module.css";

function Header2({ children }) {
  return <h2 className={style.header2}>{children}</h2>;
}

export default Header2;
