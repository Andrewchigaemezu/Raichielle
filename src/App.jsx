import "./App.css";
import FrontPage from "./pages/FrontPage";
import ProductsPage, { loader as productLoader } from "./pages/ProductsPage";
// import ProductDetail from "./components/Productdetail";
import ProductDetailPage, {
  loader as productDetailLoader,
} from "./pages/ProductDetailPage";
import DashboardPage from "./pages/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/shop/:category",
        element: <ProductsPage />,
        loader: productLoader,
      },
      {
        path: "/shop/:category/:productId",
        element: <ProductDetailPage />,
        loader: productDetailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
