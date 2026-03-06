import { Outlet } from "react-router-dom";
import NavBar from "../components/frontpagecomponents/NavBar";
import { ScrollRestoration } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default RootLayout;
