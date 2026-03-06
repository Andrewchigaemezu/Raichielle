import style from "./OtherProducts.module.css";
import Header3 from "../../utilities/Header3";
import otherp_blackbag from "../../assets/img/otherp_blackbag.png";
import otherp_brownbag from "../../assets/img/otherp_brownbag.png";
import otherp_capjacket from "../../assets/img/otherp_capjacket.png";
import otherp_fitting from "../../assets/img/otherp_fitting.png";
import otherp_fulldress from "../../assets/img/otherp_fulldress.png";
import otherp_jacket from "../../assets/img/otherp_jacket.png";
import otherp_pinkbag from "../../assets/img/otherp_pinkbag.png";
import otherp_redbag from "../../assets/img/otherp_redbag.png";
import { useEffect, useRef } from "react";
function OtherProducts() {
  const firstContRef = useRef(null);
  const secondContRef = useRef(null);

  useEffect(() => {
    const el1 = firstContRef.current;

    // console.log(el1, el2);
    const onWheel = (e) => {
      if (
        el1 &&
        el1.scrollLeft < el1.scrollWidth - el1.clientWidth &&
        e.deltaY > 0
      ) {
        // console.log(el1.scrollLeft);
        e.preventDefault();
        el1.scrollLeft += e.deltaY;
      }
      if (el1 && e.deltaY < 0 && el1.scrollLeft > 0) {
        e.preventDefault();
        el1.scrollLeft += e.deltaY;
      }
    };

    el1.addEventListener("wheel", onWheel, { passive: false });
    return () => el1.removeEventListener("wheel", onwheel);
  }, []);

  useEffect(() => {
    const el2 = secondContRef.current;
    if (el2) el2.scrollLeft = el2.scrollWidth - el2.clientWidth;
    const onWheel = (e) => {
      if (el2 && el2.scrollLeft > 0 && e.deltaY > 0) {
        e.preventDefault();
        el2.scrollLeft -= e.deltaY;
      }
      if (
        el2 &&
        e.deltaY < 0 &&
        el2.scrollLeft < el2.scrollWidth - el2.clientWidth
      ) {
        e.preventDefault();
        el2.scrollLeft -= e.deltaY;
      }
    };
    el2.addEventListener("wheel", onWheel, { passive: false });
    return () => el2.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className={style.otherproducts}>
      <Header3>Products From Same Collection</Header3>

      <div className={style.otherproducts_cont}>
        <ul className={style.otherproducts_first_cont} ref={firstContRef}>
          <li>
            <img src={otherp_jacket} alt="jacket" />
          </li>
          <li>
            {" "}
            <img src={otherp_redbag} alt="red bag" />
          </li>
          <li>
            {" "}
            <img src={otherp_fitting} alt="fitting" />
          </li>
          <li>
            {" "}
            <img src={otherp_jacket} alt="jacket" />
          </li>
          <li>
            {" "}
            <img src={otherp_jacket} alt="jacket" />
          </li>
          <li>
            {" "}
            <img src={otherp_redbag} alt="red bag" />
          </li>
          <li>
            {" "}
            <img src={otherp_fitting} alt="fitting" />
          </li>
          <li>
            {" "}
            <img src={otherp_jacket} alt="jacket" />
          </li>
        </ul>

        {/* <img src={otherp_brownbag} alt="brown bag" /> */}

        {/* <img src={otherp_pinkbag} alt="pink bag" /> */}
        <ul className={style.otherproducts_second_cont} ref={secondContRef}>
          <li>
            {" "}
            <img src={otherp_fulldress} alt="full dress" />
          </li>
          <li>
            {" "}
            <img src={otherp_capjacket} alt="cap and jacket" />
          </li>
          <li>
            {" "}
            <img src={otherp_blackbag} alt="black bag" />
          </li>
          <li>
            {" "}
            <img src={otherp_fulldress} alt="full dress" />
          </li>
          <li>
            {" "}
            <img src={otherp_fulldress} alt="full dress" />
          </li>
          <li>
            {" "}
            <img src={otherp_capjacket} alt="cap and jacket" />
          </li>
          <li>
            {" "}
            <img src={otherp_blackbag} alt="black bag" />
          </li>
          <li>
            {" "}
            <img src={otherp_fulldress} alt="full dress" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default OtherProducts;
