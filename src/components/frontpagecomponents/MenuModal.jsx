import style from "./MenuModal.module.css";
import { Link, NavLink } from "react-router-dom";
import Paragraph from "../../utilities/Paragraph";
import close_icon from "../../assets/icons/close_icon.svg";
function MenuModal() {
  return (
    <section className={style.menu_modal}>
      <ul className={style.menu_modal_cont}>
        <li>
          <img src={close_icon} alt="close icon" />
        </li>
        <li>
          <Link to={"/"} className={style.modal_btn}>
            <Paragraph>Home</Paragraph>
          </Link>
        </li>
        <li>
          <Link to={"#"} className={style.modal_btn}>
            <Paragraph>About Us</Paragraph>
          </Link>
        </li>
        <li>
          <Link to={"#"} className={style.modal_btn}>
            <Paragraph>Contact Us</Paragraph>
          </Link>
        </li>
        <li>
          <Link to={"/shop/all"} className={style.modal_btn}>
            <Paragraph>Shop</Paragraph>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className={style.modal_btn}>
            <Paragraph>Shopping Cart</Paragraph>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MenuModal;
