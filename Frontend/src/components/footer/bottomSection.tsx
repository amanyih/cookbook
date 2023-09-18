import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import {} from "@fortawesome/free-regular-svg-icons";

const FotterBottomSection = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-between items-center px-10 py-10 border-t-2 border-gray-200 dark:border-gray-800 w-full ">
      <div className="text-md text-gray-600 dark:text-whiteish">
        © 2023 CookBook - All rights reserved
      </div>
      <ul className="flex last:mr-0">
        <li className="mr-6">
          <FiFacebook />
        </li>
        <li className="mr-6">
          <FiTwitter />
        </li>
        <li className="mr-6">
          <FiInstagram />
        </li>
        <li className="mr-6">
          <FiYoutube />
        </li>
      </ul>
    </div>
  );
};

export default FotterBottomSection;
