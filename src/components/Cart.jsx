import style from "./Cart.module.css";
import CartCard from "./cartcomponents/cartCard";
import Footer from "./frontpagecomponents/Footer";
import OtherProducts from "./productdetailcomponents/OtherProducts";

function Cart() {
  return (
    <section className={style.cart}>
      <CartCard />
      <OtherProducts />
      <Footer />
    </section>
  );
}

export default Cart;
