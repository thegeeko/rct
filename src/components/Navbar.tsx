import { Link } from "react-router-dom";
import MoonIcon from "./DarkModeIcon";
import GithubIcon from "./GithubIcon";

const Navbar = () => {
  // Check if darkMode is supposed to be on by checking settings in localStorage
  const mainDiv = document.getElementById("main");
  if (localStorage.getItem("darkMode") == "true") {
    mainDiv?.classList.add("dark");
  }

  // Toggle darkMode and save settings in localStorage
  const toggleDarkMode = () => {
    if (localStorage.getItem("darkMode") == "false") {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }

    mainDiv?.classList.toggle("dark");
  };

  // TODO: Make your own dark mode logo

  return (
    <div className="w-full bg-theme-accent shadow-md h-9 lg:h-12 fixed top-0 left-0 flex flex-row items-center text-white font-bold px-4 md:px-8 lg:px-16 text-xl justify-between">
      <div>
        <Link to="/" className="hover:text-gray-300 ease-in-out duration-300 lg:text-3xl">RCT</Link>
      </div>
      <div className="flex flex-row gap-4">
        <a
          href="https://github.com/OmarQurashi868/rct"
          target="_blank"
          rel="noreferrer noopener"
        >
  
          <GithubIcon />
        </a>
        <button onClick={toggleDarkMode}>
          <MoonIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
