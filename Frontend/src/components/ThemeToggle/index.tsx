import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function ThemeToggle() {
  const [theme, setTheme] = useState<String>("light");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button onClick={toggleTheme}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className={`text-2xl text-${theme === "light" ? "black" : "white"}`}
      ></FontAwesomeIcon>
    </button>
  );
}

export default ThemeToggle;
