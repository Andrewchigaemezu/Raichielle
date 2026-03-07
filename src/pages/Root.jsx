import { Outlet } from "react-router-dom";
import NavBar from "../components/frontpagecomponents/NavBar";
import { ScrollRestoration } from "react-router-dom";
import MenuModal from "../components/frontpagecomponents/MenuModal";
import { useSelector } from "react-redux";
function RootLayout() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  return (
    <>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
      {isOpen && <MenuModal />}
    </>
  );
}

export default RootLayout;
