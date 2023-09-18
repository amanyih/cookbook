import CompanyDescription from "./companyDescription";
import FooterNav from "./footerNav";
const FooterTopSection = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start  md:space-x-10 md:space-y-0 space-y-10 md:px-10 py-20 ">
      <CompanyDescription />
      <FooterNav />
    </div>
  );
};

export default FooterTopSection;
