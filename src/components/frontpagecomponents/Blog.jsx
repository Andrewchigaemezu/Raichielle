import style from "./Blog.module.css";
import fulldress_img from "../../assets/img/fulldress_img.png";

import man_on_street from "../../assets/img/man_on_street.png";
import men_suit from "../../assets/img/men_suit.png";
import coat_img from "../../assets/img/coat_img.png";
import Paragraph from "../../utilities/Paragraph";
function Blog() {
  return (
    <section className={style.blog}>
      <div className={style.blog_first_img_cont}>
        <img src={man_on_street} alt="man on street" />
      </div>
      <div className={style.blog_text_cont}>
        <Paragraph>
          Fashion is more than fabric—it's a statement of identity, confidence,
          and creativity. At Raichielle, we design clothing and bags that
          empower everyone to express themselves boldly, while offering
          customization that makes every piece truly personal.
        </Paragraph>
      </div>

      <div className={style.blog_second_img_cont}>
        <img src={men_suit} alt="men suit image" />
      </div>
    </section>
  );
}

export default Blog;
