import FotterBottomSection from "./bottomSection";
import FooterTopSection from "./topSection";

const Footer = () => {
  return (
    <div className="  w-full flex flex-col justify-between md:items-start md:justify-start md:space-x-10 md:space-y-0 space-y-10 px-10">
      <FooterTopSection />
      <FotterBottomSection />
    </div>
  );
};

export default Footer;
