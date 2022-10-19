import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
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
  const router = useRouter();

  // Check if darkMode is supposed to be on by checking settings in localStorage
  let mainDiv: HTMLElement | null;
  if (typeof window != "undefined") {
    mainDiv = document.getElementById("main");
    if (localStorage.getItem("darkMode") == "false") {
      mainDiv?.classList.remove("dark");
    } else {
      mainDiv?.classList.add("dark");
    }
  }

  // Toggle darkMode and save settings in localStorage
  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("darkMode") == "false") {
        localStorage.setItem("darkMode", "true");
      } else {
        localStorage.setItem("darkMode", "false");
      }
      mainDiv?.classList.toggle("dark");
      setDarkMode(localStorage.getItem("darkMode") || "true");
    }
  };

  // Submit handler (save data to localStorage and navigate to stats)
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      const data = event.target as typeof event.target & {
        username: { value: string };
        platform: { value: string };
      };
      localStorage.setItem("username", data.username.value);
      localStorage.setItem("platform", data.platform.value);

      router.push(
        `/stats?username=${data.username.value}&platform=${data.platform.value}`
      );
    }
  };

  // Navbar searchbar
  const SearchUtil = (
    <form onSubmit={submitHandler} className="hidden md:block">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-row gap-0 justify-center md:h-6 "
      >
        <Select
          className="rounded-r-none font-normal text-black !text-xs !px-1 text-center !shadow-none border-r-white"
          divClassName="!w-3/12 text-center"
        />
        <Input
          placeHolder="Username"
          className="rounded-none font-normal text-black !text-base !px-1 !shadow-none border-l-white"
          divClassName="!w-3/6"
        />
        <Button
          type="submit"
          className="rounded-l-none m-0 !h-6 rounded-r-md !text-sm !leading-none !shadow-none px-4 py-1"
        >
          ROLL
        </Button>
      </motion.div>
    </form>
  );

  const MobileSearchUtil = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="md:hidden w-full bg-gray-900 dark:bg-gray-300 ease-in-out duration-200 shadow-md h-9 lg:h-10 xl:h-12 fixed top-9 lg:top-10 xl:top-12 left-0 flex flex-row justify-center items-center text-white font-bold px-2 md:px-4 lg:px-10 text-xl select-none z-50"
    >
      <form onSubmit={submitHandler}>
        <div className="flex flex-row gap-0 w-full justify-center">
          <Select
            className="rounded-r-none !h-6 font-normal 2xl:h-8 text-black !text-xs !shadow-none !px-1 text-center border-r-white"
            divClassName="!w-2/12 text-center"
          />
          <Input
            placeHolder="Username"
            className="rounded-none !h-6 font-normal 2xl:h-8 text-black !shadow-none !text-base !px-1 border-l-white"
            divClassName="!w-5/12"
          />
          <Button
            type="submit"
            className="rounded-l-none !h-6 2xl:h-8 !w-2/12 m-0 rounded-r-md !shadow-none !text-sm !leading-none"
          >
            ROLL
          </Button>
        </div>
      </form>
    </motion.div>
  );

  return (
    <>
      <div className="w-full bg-black dark:bg-white shadow-md h-9 fixed top-0 left-0 flex flex-row items-center text-white font-bold px-4 md:px-6 lg:px-16 text-xl justify-between select-none z-50">
        <div>
          <Link href="/">
            <a className="ease-in-out duration-200 text-2xl flex flex-row items-center">
              <LogoIcon />
              <span className="dark:text-black ease-in-out duration-200 font-extrabold">
                RCT
              </span>
            </a>
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {props.searchBar && SearchUtil}
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
