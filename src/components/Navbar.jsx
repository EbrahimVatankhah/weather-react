import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-indigo-2 dark:bg-navy-mid border-b border-indigo-2/20 dark:border-white/10">
      <h1 className="text-2xl sm:text-3xl font-bold text-navy-mid dark:text-indigo-2">
        Weather App
      </h1>
      <button
        className="text-2xl hover:scale-110 transition-transform"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Navbar;
