import style from "./Header3.module.css";

function Header3({ children }) {
  return <h3 className={style.header3}>{children}</h3>;
}

export default Header3;
