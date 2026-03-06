import style from "./Landingpage.module.css";
import NavBar from "./frontpagecomponents/NavBar";
import Hero from "./frontpagecomponents/Hero";
import Blog from "./frontpagecomponents/Blog";
import FeaturedBags from "./frontpagecomponents/Featuredbags";
import Categories from "./frontpagecomponents/Categories";
import Services from "./frontpagecomponents/Services";
import CallToAction from "./frontpagecomponents/CallToAction";
import Footer from "./frontpagecomponents/Footer";

function Landingpage() {
  return (
    <section className={style.landingpage}>
      {/* <NavBar></NavBar> */}
      <Hero />
      <section className={style.landingpage_featuredbag_cont}>
        <Blog />
        <FeaturedBags />
      </section>
      <Categories />
      <section className={style.landingpage_services_cont}>
        <Services />
        <CallToAction />
      </section>
      <Footer />
    </section>
  );
}

export default Landingpage;
