import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function ThemeToggle() {
  const [dark, setDark] = useState<boolean>();

  const toggleTheme = () => {
    setDark((prev) => {
      return !prev;
    });
  };

  return (
    <button onClick={toggleTheme} className="px-2 w-20">
      <FontAwesomeIcon
        icon={!dark ? faMoon : faSun}
        className={`text-2xl text-black`}
      ></FontAwesomeIcon>
    </button>
  );
}

export default ThemeToggle;
