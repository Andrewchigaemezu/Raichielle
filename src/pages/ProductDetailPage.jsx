import ProductDetail from "../components/Productdetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "..";

function ProductDetailPage() {
  const params = useParams();
  // console.log(params.productId);
  return (
    <>
      <ProductDetail />
    </>
  );
}
export async function loader({ params }) {
  const productPromise = getProductsById(params.productId);
  // console.log("I am here");
  // console.log(params.productId);
  return { productPromise };
}

export default ProductDetailPage;
