import style from "./Products.module.css";

import Paragraph from "../../utilities/Paragraph";
import Header4 from "../../utilities/Header4";
import SmallText from "../../utilities/SmallText";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
import { useParams } from "react-router-dom";
function Products({ props }) {
  const cartRef = useRef(null);
  const buyBtnRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const params = useParams();
  const productInCart = cart.some((product) => product.id === props.id);
  function navigateToProductHandler(e) {
    if (e.target === cartRef.current || e.target === buyBtnRef.current) return;
    navigate(`/shop/${params.category}/${props.id}`);
  }
  function addToCartHandler() {
    // console.log(props);
    const prodWithQuantity = { ...props, quantity: 1 };
    dispatch(cartActions.addToCart(prodWithQuantity));
  }
  // function removeFromCartHandler() {
  //   // console.log(props);
  //   dispatch(cartActions.removeFromCart(props));
  // }
  function goToCartHandler() {
    navigate("/cart");
  }
  return (
    <li className={style.products} onClick={navigateToProductHandler}>
      <div
        className={style.product_img}
        style={{
          backgroundImage: `url(/img/shop_img/${props.img})`,
        }}
      ></div>

      <div className={style.product_text}>
        <div className={style.product_text_cont}>
          <Paragraph>{props.title}</Paragraph>
          <Paragraph>${props.price}</Paragraph>
        </div>
        <div className={style.product_btn_cont}>
          {productInCart ? (
            <button
              className={style.cart_btn}
              ref={cartRef}
              onClick={goToCartHandler}
            >
              Visit Cart
            </button>
          ) : (
            <button
              className={style.cart_btn}
              ref={cartRef}
              onClick={addToCartHandler}
            >
              Cart Item
            </button>
          )}
          <a href="" className={style.purchase_btn} ref={buyBtnRef}>
            Buy Now
          </a>
        </div>
      </div>
    </li>
  );
}

export default Products;
