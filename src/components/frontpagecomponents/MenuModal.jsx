import style from "./MenuModal.module.css";
import { Link, NavLink } from "react-router-dom";
import Paragraph from "../../utilities/Paragraph";
import close_icon from "../../assets/icons/close_icon.svg";
import { menuModalActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MenuModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className={style.menu_modal}>
      <ul className={style.menu_modal_cont}>
        <li>
          <img
            src={close_icon}
            alt="close icon"
            onClick={() => dispatch(menuModalActions.openCloseModal())}
          />
        </li>
        <li>
          <Link
            to={"/"}
            className={style.modal_btn}
            onClick={() => {
              dispatch(menuModalActions.openCloseModal());
            }}
          >
            <Paragraph>Home</Paragraph>
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className={style.modal_btn}
            onClick={() => {
              dispatch(menuModalActions.openCloseModal());
            }}
          >
            <Paragraph>About Us</Paragraph>
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className={style.modal_btn}
            onClick={() => {
              dispatch(menuModalActions.openCloseModal());
            }}
          >
            <Paragraph>Contact Us</Paragraph>
          </Link>
        </li>
        <li>
          <Link
            to={"/shop/all"}
            className={style.modal_btn}
            onClick={() => {
              dispatch(menuModalActions.openCloseModal());
            }}
          >
            <Paragraph>Shop</Paragraph>
          </Link>
        </li>
        <li>
          <Link
            to={"/cart"}
            className={style.modal_btn}
            onClick={() => {
              dispatch(menuModalActions.openCloseModal());
            }}
          >
            <Paragraph>Shopping Cart</Paragraph>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MenuModal;
