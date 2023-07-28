import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import {} from "@fortawesome/free-regular-svg-icons";

const FotterBottomSection = () => {
  return (
    <div className="flex  justify-between my-5 pt-5 border-t-2 ">
      <div className="text-md text-gray-600">
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
