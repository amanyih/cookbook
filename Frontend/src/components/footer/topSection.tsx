import CompanyDescription from "./companyDescription";
import FooterNav from "./footerNav";
const FooterTopSection = () => {
  return (
    <div className="flex justify-between px-4 py-6">
      <CompanyDescription />
      <FooterNav />
    </div>
  );
};

export default FooterTopSection;
