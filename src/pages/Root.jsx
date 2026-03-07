import { Outlet } from "react-router-dom";
import NavBar from "../components/frontpagecomponents/NavBar";
import { ScrollRestoration } from "react-router-dom";
import MenuModal from "../components/frontpagecomponents/MenuModal";
function RootLayout() {
  return (
    <>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
      <MenuModal />
    </>
  );
}

export default RootLayout;
