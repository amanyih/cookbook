import NavBar from "../components/Nav/index";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
const RootLayout = () => {
  return (
    <div className=" font-poppins flex flex-col items-center px-20 overflow-auto justify-between min-h-screen">
      <NavBar />
      <div className="w-full min-h-96 flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
