import FotterBottomSection from "./bottomSection";
import FooterTopSection from "./topSection";

const Footer = () => {
  return (
    <div className=" flex flex-col w-full bg-whiteish -mx-40">
      <FooterTopSection />
      <FotterBottomSection />
    </div>
  );
};

export default Footer;
