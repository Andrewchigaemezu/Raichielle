import style from "./Services.module.css";

import Header4 from "../../utilities/Header4";
import Header5 from "../../utilities/Header5";
import Paragraph from "../../utilities/Paragraph";
import measuring_img from "../../assets/img/measuring_img.png";
import sewing_img from "../../assets/img/sewing_img.png";
import pattern_img from "../../assets/img/pattern_img.png";
import store_img from "../../assets/img/store_img.png";
import SmallText from "../../utilities/SmallText";

function Services() {
  return (
    <section className={style.services}>
      <Header4>Raichielle's Services</Header4>
      <div className={style.services_cont}>
        <div>
          <img src={measuring_img} alt="measuring cloth image" />
          <Header5>Cloth Customization</Header5>
          <Paragraph>
            Tailor your style with our cloth customization service—crafted to
            fit your personality, preferences, and unique vision.
          </Paragraph>
          <a href="#" className={style.service_btn}>
            <SmallText>CUSTOMIZE CLOTH</SmallText>
          </a>
        </div>
        <div>
          <img src={sewing_img} alt="sewing machine" />
          <Header5>Cloth Making</Header5>
          <Paragraph>
            We design and produce clothing with care and creativity—bringing
            modern styles and unique expressions to life for every occasion.
          </Paragraph>
          <a href="#" className={style.service_btn}>
            <SmallText>COME GET FITTED</SmallText>
          </a>
        </div>
        <div>
          <img src={store_img} alt="store image" />
          <Header5>Collect from Store</Header5>
          <Paragraph>
            Discover our latest collections and place your orders directly from
            our store—bringing fashion and elegance straight to you.
          </Paragraph>
          <a href="#" className={style.service_btn}>
            <SmallText>ORDER CLOTH</SmallText>
          </a>
        </div>
        <div className={style.services_pattern_card}>
          <img src={pattern_img} alt="cloth pattern" />
          <Header5>Pattern Making</Header5>
          <Paragraph>
            Our pattern making service transforms ideas into precise
            designs—laying the foundation for garments that fit perfectly and
            reflect true craftsmanship.
          </Paragraph>
          <a href="#" className={style.service_btn}>
            <SmallText>SHOP PATTERN</SmallText>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
