import style from "./CallToAction.module.css";
import Paragraph from "../../utilities/Paragraph";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className={style.calltoaction}>
      <div className={style.calltoaction_container}>
        <Link to="/shop/all" className={style.cta_btn}>
          <Paragraph>Shop Now</Paragraph>
        </Link>
      </div>
    </section>
  );
}
export default CallToAction;
