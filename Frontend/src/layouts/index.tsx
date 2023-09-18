import NavBar from "../components/Nav/index";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Logo } from "../components";
const RootLayout = () => {
  return (
    <div className=" font-poppins flex flex-col items-center px-10 overflow-y-auto justify-between min-h-screen dark:bg-slate-700 dark:text-whiteish transition-all duration-700">
      <NavBar />
      <div className="w-full min-h-96 flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
