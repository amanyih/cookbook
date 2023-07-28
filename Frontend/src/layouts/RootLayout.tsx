import NavBar from "../components/Nav/index";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
const RootLayout = () => {
  return (
    <div className=" font-poppins  h-screen flex flex-col items-center px-20 overflow-auto justify-between">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
