import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState<boolean>();

  const toggleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    if (dark) {
      localStorage.setItem("dark", "false");
      root.classList.remove("dark");
      setDark(false);
    } else {
      localStorage.setItem("dark", "true");
      root.classList.add("dark");
      setDark(true);
    }
  };

  return (
    <button onClick={toggleTheme} className="mr-5 text-2xl">
      {!dark && <FaMoon />}
      {dark && <FaSun className="text-primary-400" />}
    </button>
  );
}

export default ThemeToggle;
