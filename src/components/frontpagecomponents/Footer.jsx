import Header1 from "../../utilities/Header1";
import Header4 from "../../utilities/Header4";
import Paragraph from "../../utilities/Paragraph";
import SmallText from "../../utilities/SmallText";
import style from "./Footer.module.css";

function Footer() {
  return (
    <section className={style.footer}>
      <div className={style.footer_campaign_cont}>
        <Paragraph>SIGN UP FOR UPDATES</Paragraph>
        <Paragraph>
          Stay connected with the latest styles, collections, and exclusive
          offers. Subscribe now to be part of our fashion journey.
        </Paragraph>
        <a href="#" className={style.footer_campaign_btn}>
          Subscribe
        </a>
      </div>
      <Header1>Raichielle</Header1>
      <div className={style.footer_container}>
        <div>
          <Header4>NEED HELP?</Header4>
          <Paragraph>Contact Us</Paragraph>
          <Paragraph>Email Subscribe</Paragraph>
          <Paragraph>My Order</Paragraph>
          <Paragraph>FAQs</Paragraph>
        </div>

        <div>
          <Header4>COMPANY</Header4>
          <Paragraph>About Us</Paragraph>
          <Paragraph>Services</Paragraph>
          <Paragraph>Our Team</Paragraph>
          <Paragraph>Testimonial</Paragraph>
        </div>
        <div>
          <Header4>SOCIALS</Header4>
          <Paragraph>Instagram</Paragraph>
          <Paragraph>Facebook</Paragraph>
          <Paragraph>Twitter</Paragraph>
          <Paragraph>Tiktok</Paragraph>
        </div>
        <div>
          <Header4>PRODUCTS</Header4>
          <Paragraph>Pants</Paragraph>
          <Paragraph>Bags</Paragraph>
          <Paragraph>Street Wears</Paragraph>
          <Paragraph>Coporate Wears</Paragraph>
        </div>
      </div>
      <div className={style.footer_copyright_cont}>
        <SmallText>Raichielle@2025 all rights reserved</SmallText>
      </div>
    </section>
  );
}

export default Footer;
