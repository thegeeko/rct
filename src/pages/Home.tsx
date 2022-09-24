import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

const Home = () => {
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = event.target as typeof event.target & {
      username: { value: string };
      platform: { value: string };
    };
    localStorage.setItem("username", data.username.value);
    localStorage.setItem("platform", data.platform.value);
    // TODO: Fetch and show loading screen
    // TODO: Show error if not found
    // TODO: Feed parameters into URL and reroute
    alert(data.username.value + " " + data.platform.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex gap-12 md:gap-8 flex-col w-full h-full text-center items-center mt-20 md:mt-12 overflow-x-hidden">
        <div className="mx-4 text-base sm:text-lg md:text-xl ease-in-out duration-300">
          <div className="font-extrabold text-theme-accent">
            ROLLER CHAMPIONS TRACKER
          </div>
          <div className="dark:text-white ease-in-out duration-300">Stat tracker for Roller Champions</div>
        </div>
        <div className="flex flex-col items-center gap-6 mx-2">
          <Input placeHolder="Username" label="Username" />
          <Select label="Platform" />
        </div>
        <Button type="submit">ROLL</Button>
      </div>
    </form>
  );
};

export default Home;
