import style from "./Productpage.module.css";
import Footer from "./frontpagecomponents/Footer";
import NavBar from "./frontpagecomponents/NavBar";
import FilterAssist from "./productpagecomponents/FilterAssist";
import ProductDisplay from "./productpagecomponents/ProductDisplay";
import Products from "./productpagecomponents/Products";
import jacket from "../assets/img/jacket.jpg";
import purse from "../assets/img/purse.jpg";
import hoodie from "../assets/img/hoodie.jpeg";
import Header4 from "../utilities/Header4";
import arrowdown from "../assets/icons/arrowdown.svg";
import arrowup from "../assets/icons/arrowup.svg";
import Paragraph from "../utilities/Paragraph";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../utilities/Spinner";

function Productpage() {
  const products = useLoaderData();
  // console.log(products.productsPromise);
  return (
    <section className={style.productpage}>
      <ProductDisplay />
      <FilterAssist />
      <section className={style.productsection}>
        <div className={style.productsection_cont}>
          <div className={style.categories_cont}>
            <div className={style.products_allproduct_cont}>
              <header>
                <Paragraph>Products</Paragraph>
                <img src={arrowup} />
              </header>
              <ul className={style.products_allproduct_list}>
                <li>
                  <Paragraph>All Products</Paragraph>
                </li>
                <li>
                  <Paragraph>Pants</Paragraph>
                </li>
                <li>
                  <Paragraph>Bags</Paragraph>
                </li>
                <li>
                  <Paragraph>Street Wears</Paragraph>
                </li>
                <li>
                  <Paragraph>Corporate Wears</Paragraph>
                </li>
              </ul>
            </div>
            <div className={style.products_color_cont}>
              <header>
                <Paragraph>Colors</Paragraph>
                <img src={arrowup} />
              </header>
            </div>
            <div className={style.products_size_cont}>
              <header>
                <Paragraph>Sizes</Paragraph>
                <img src={arrowup} />
              </header>
            </div>
            <div className={style.products_price_cont}>
              <header>
                <Paragraph>Prices</Paragraph>
                <img src={arrowup} />
              </header>
            </div>
          </div>

          <Suspense
            fallback={<Spinner />}
            hydrateFallback={<p>Loading initial products...</p>}
          >
            <Await resolve={products.productsPromise}>
              {(loadedProducts) => (
                <ul className={style.product_cont}>
                  {loadedProducts.map((product) => (
                    <Products props={product} key={product.id} />
                  ))}
                </ul>
              )}
            </Await>
          </Suspense>
        </div>
      </section>
      <Footer />
    </section>
  );

  // return (
  //   <div>
  //     <h1>Products Page</h1>
  //     <p>This part of the page renders immediately.</p>

  //     <Suspense
  //       fallback={<p>Loading products...</p>}
  //       hydrateFallback={<p>Loading initial products...</p>}
  //     >
  //       <Await resolve={products}>
  //         {
  //           (loadedProducts) => console.log(loadedProducts)
  //           // (
  //           // <ul>
  //           //   {loadedProducts.map((p) => (
  //           //     <li key={p.id}>{p.name}</li>
  //           //   ))}
  //           // </ul>
  //           // )
  //         }
  //       </Await>
  //     </Suspense>
  //   </div>
  // );
}

export default Productpage;
