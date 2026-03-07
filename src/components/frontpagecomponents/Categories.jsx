import style from "./Categories.module.css";
import Header4 from "../../utilities/Header4";
import Paragraph from "../../utilities/Paragraph";
import streetwear_img from "../../assets/img/streetwear_img.jpeg";
import bags_img from "../../assets/img/bags_img.jpeg";
import coperatewears_img from "../../assets/img/coperatewear_img.jpeg";
import pants_img from "../../assets/img/pants_img.jpeg";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className={style.categories}>
      <Header4>Crafted by Raichielle</Header4>
      <div className={style.categories_cont}>
        <div>
          <img src={pants_img} alt="pants image" />
          <Link to={"/shop/pants"} className={style.categories_btn}>
            <Paragraph>Pants</Paragraph>
          </Link>
        </div>
        <div>
          <img src={coperatewears_img} alt="coperate wears image" />
          <Link to={"/shop/corporate_wears"} className={style.categories_btn}>
            <Paragraph>Coperate Wears</Paragraph>
          </Link>
        </div>
        <div>
          <img src={streetwear_img} alt="street wears image" />
          <Link to={"/shop/Street_wears"} className={style.categories_btn}>
            <Paragraph>Street Wears</Paragraph>
          </Link>
        </div>
        <div>
          <img src={bags_img} alt="bags image" />
          <Link to={"/shop/bags"} className={style.categories_btn}>
            <Paragraph>Bags</Paragraph>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Categories;
