import Productpage from "../components/Productpage";
import { getProducts } from "..";
// import { defer } from "react-router-dom";

function ProductsPage() {
  return <Productpage />;
}

export async function loader() {
  const productsPromise = getProducts();
  return { productsPromise };
}

export default ProductsPage;
