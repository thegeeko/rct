import GithubIcon from "../assets/github-icon.svg";
import MoonIcon from "./Icon";

const Navbar = () => {

  const mainDiv = document.getElementById("main");
  if (localStorage.getItem("darkMode") == "true") {
    mainDiv?.classList.add("dark");
  }

  const switchDarkMode = () => {
    if (localStorage.getItem("darkMode") == "false") {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }

    mainDiv?.classList.toggle("dark");
  };

  return (
    <div className="w-full bg-theme-accent shadow-md h-9 fixed top-0 left-0 flex flex-row items-center text-white font-bold px-4 md:px-8 text-xl justify-between">
      <div>RCT</div>
      <div className="flex flex-row gap-4">
        <a
          href="https://github.com/OmarQurashi868/rct"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={GithubIcon} />
        </a>
        <button onClick={switchDarkMode}>
          <MoonIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
