import FooterList from "./footerList";

const FooterNav = () => {
  return (
    <div className="flex justify-between w-1/3">
      <FooterList
        title="CookBook"
        list={[
          { name: "About Us", link: "/about" },
          { name: "Contact", link: "/contact" },
          { name: "Feedback", link: "/feedback" },
        ]}
      />{" "}
      <FooterList
        title="Legal"
        list={[
          { name: "Terms and Conditions", link: "/about" },
          { name: "Cookies", link: "/contact" },
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
