import style from "./Hero.module.css";

import Header3 from "../../utilities/header3";
import Paragraph from "../../utilities/Paragraph";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={style.hero}>
      <Header3>Your looks, Raichielle's business</Header3>
      <Link to="/shop/all" className={style.hero_btn}>
        <Paragraph>Shop Now</Paragraph>
      </Link>
    </section>
  );
}
export default Hero;
