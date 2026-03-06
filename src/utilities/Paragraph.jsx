import style from "./Paragraph.module.css";

function Paragraph({ children }) {
  return <p className={style.paragraph}>{children}</p>;
}

export default Paragraph;
