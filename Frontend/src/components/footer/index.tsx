import FotterBottomSection from "./bottomSection";
import FooterTopSection from "./topSection";

const Footer = () => {
  return (
    <div className=" flex flex-col bg-whiteish dark:bg-slate-600 mt-40 -mx-10 px-10">
      <FooterTopSection />
      <FotterBottomSection />
    </div>
  );
};

export default Footer;
