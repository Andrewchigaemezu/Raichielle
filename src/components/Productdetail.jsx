import style from "./Productdetail.module.css";
import Footer from "./frontpagecomponents/Footer";
import OtherProducts from "./productdetailcomponents/OtherProducts";
import ProductCard from "./productdetailcomponents/ProductCard";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../utilities/Spinner";

function ProductDetail() {
  const product = useLoaderData();
  return (
    <section className={style.productdetail}>
      {/* <NavBar /> */}
      <Suspense
        fallback={
          <div className={style.loading_spinner_cont}>
            <Spinner />
          </div>
        }
        hydrateFallback={<p>Loading product data...</p>}
      >
        <Await resolve={product.productPromise}>
          {(loadedproduct) => <ProductCard props={loadedproduct} />}
        </Await>
      </Suspense>

      <OtherProducts />
      <Footer />
    </section>
  );
}

export default ProductDetail;
