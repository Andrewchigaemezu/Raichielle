import style from "./Header1.module.css";
function Header1({ children }) {
  return <h1 className={style.header1}>{children}</h1>;
}

export default Header1;
