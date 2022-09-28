import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import MoonIcon from "./DarkModeIcon";
import GithubIcon from "./GithubIcon";
import LogoIcon from "./LogoIcon";
import Input from "./Input";
import Select from "./Select";

interface Props {
  searchBar?: boolean;
}

const Navbar = (props: Props) => {
  const [darkMode, setDarkMode] = useState("true");
  const navigate = useNavigate();

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

  // Submit handler (save data to localStorage and navigate to stats)
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = event.target as typeof event.target & {
      username: { value: string };
      platform: { value: string };
    };
    localStorage.setItem("username", data.username.value);
    localStorage.setItem("platform", data.platform.value);

    navigate(
      `/stats?username=${data.username.value}&platform=${data.platform.value}`
    );
  };

  // Navbar searchbar
  const SearchUtil = (
    <form onSubmit={submitHandler} className="hidden md:block">
      <div className="flex flex-row gap-0 justify-center md:h-6 xl:h-8">
        <Select
          className="rounded-r-none font-normal text-black border-r-2 !text-xs !px-1 text-center"
          divClassName="!w-3/12 text-center"
        />
        <Input
          placeHolder="Username"
          className="rounded-none font-normal text-black border-r-2 !text-base !px-1"
          divClassName="!w-3/6"
        />
        <Button
          type="submit"
          className="rounded-l-none !w-3/12 m-0 md:h-6 xl:h-8 2xl:h-8 bg-theme-accent-dark rounded-r-lg !text-lg"
        >
          ROLL
        </Button>
      </div>
    </form>
  );

  const MobileSearchUtil = (
    <div className="md:hidden w-full bg-theme-accent-dark shadow-md h-9 lg:h-10 xl:h-12 fixed top-9 lg:top-10 xl:top-12 left-0 flex flex-row justify-center items-center text-white font-bold px-2 md:px-4 lg:px-10 text-xl">
      <form onSubmit={submitHandler}>
        <div className="flex flex-row gap-0 w-full justify-center">
          <Select
            className="rounded-r-none h-6 font-normal 2xl:h-8 text-black border-r-2 !text-xs !px-1 text-center"
            divClassName="!w-2/12 text-center"
          />
          <Input
            placeHolder="Username"
            className="rounded-none h-6 font-normal 2xl:h-8 text-black border-r-2 !text-base !px-1"
            divClassName="!w-5/12"
          />
          <Button
            type="submit"
            className="rounded-l-none h-6 2xl:h-8 !w-2/12 m-0 bg-theme-accent rounded-r-lg !text-base"
          >
            ROLL
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="w-full bg-theme-accent shadow-md h-9 lg:h-10 xl:h-12 fixed top-0 left-0 flex flex-row items-center text-white font-bold px-4 md:px-6 lg:px-16 text-xl justify-between">
        <div>
          <Link
            to="/"
            className="ease-in-out duration-200 lg:text-3xl xl:text-3xl flex flex-row items-center"
          >
            <LogoIcon />
            RCT
          </Link>
        </div>
        {props.searchBar && SearchUtil}
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
      {props.searchBar && MobileSearchUtil}
    </>
  );
};

export default Navbar;
