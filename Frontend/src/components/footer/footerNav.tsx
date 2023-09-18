import FooterList from "./footerList";

const FooterNav = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center md:items-start md:justify-start md:space-x-10 md:space-y-0 space-y-10  ">
      <FooterList
        title="CookBook"
        list={[
          { name: "About Us", link: "/about" },
          { name: "Contact", link: "/about", id: "contact-us" },
          { name: "Feedback", link: "/feedback" },
        ]}
      />{" "}
      <FooterList
        title="Legal"
        list={[
          { name: "Terms and Conditions", link: "/about" },
          { name: "Cookies", link: "" },
          { name: "Copyright", link: "/feedback" },
        ]}
      />
      <FooterList
        title="Follow"
        list={[
          { name: "Facebook", link: "/facebook" },
          { name: "Twitter", link: "/twitter" },
          { name: "Instagram", link: "/instagram" },
          { name: "Youtube", link: "/youtube" },
        ]}
      />
    </div>
  );
};

export default FooterNav;
