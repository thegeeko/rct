import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import MoonIcon from "./DarkModeIcon";
import GithubIcon from "./GithubIcon";
import LogoIcon from "./LogoIcon";
import Input from "./Input";
import Select from "./Select";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("true");

  // Check if darkMode is supposed to be on by checking settings in localStorage
  const mainDiv = document.getElementById("main");
  if (localStorage.getItem("darkMode") == "false") {
    mainDiv?.classList.remove("dark");
  } else {
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
    setDarkMode(localStorage.getItem("darkMode") || "true");
  };

  const SearchUtil = (
    <form>
      <div className="flex flex-row gap-0">
        <Select
          className="rounded-r-none h-6 font-normal 2xl:h-8 text-black border-r-2 text-sm 2xl:text-xl"
          devClassName="w-1/6 sm:w-1/6 md:w-1/6 2xl:w-1/6"
        />
        <Input
          placeHolder="Username"
          className="rounded-none h-6 font-normal 2xl:h-8 text-black border-r-2 text-sm 2xl:text-xl"
          devClassName="w-2/6 sm:w-2/6 md:w-2/6 2xl:w-2/6"
        />
        <Button type="submit" className="rounded-l-none h-6 2xl:h-8 2xl:w-3/12 m-0 bg-blue-600 rounded-r-xl">
          ROLL
        </Button>
      </div>
    </form>
  );

  return (
    <div className="w-full bg-theme-accent shadow-md h-9 lg:h-10 xl:h-12 fixed top-0 left-0 flex flex-row items-center text-white font-bold px-4 md:px-8 lg:px-16 text-xl justify-between">
      <div>
        <Link
          to="/"
          className="ease-in-out duration-200 lg:text-3xl xl:text-3xl flex flex-row"
        >
          <LogoIcon />
          RCT
        </Link>
      </div>
      {window.location.pathname == "/stats" && SearchUtil}
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
