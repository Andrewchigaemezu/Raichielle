import style from "./Featuredbags.module.css";
import Header3 from "../../utilities/Header3";
import black_bag from "../../assets/img/black_bag.jpeg";
import brown_bag from "../../assets/img/brown_bag.jpeg";
import pink_bag from "../../assets/img/pink_bag.jpeg";
import Header4 from "../../utilities/Header4";
function FeaturedBags() {
  return (
    <section className={style.featuredbags}>
      {/* <Header3>Explore Our Bags</Header3> */}
      <Header4>Explore Our Bags</Header4>
      <div className={style.featuredbags_cont}>
        <a href="#" className={style.featuredbags_btn}>
          <img src={black_bag} alt="black bag" />
        </a>
        <a href="#" className={style.featuredbags_btn}>
          <img src={brown_bag} alt="brown bag" />
        </a>
        <a href="#" className={style.featuredbags_btn}>
          <img src={pink_bag} alt="pink bag" />
        </a>
      </div>
    </section>
  );
}

export default FeaturedBags;
