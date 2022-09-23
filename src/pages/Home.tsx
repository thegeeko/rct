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
    // TODO: Feed parameters into URL and rerout
    alert(data.username.value + " " + data.platform.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex gap-16 md:gap-20 flex-col w-full h-full text-center items-center mt-28 overflow-x-hidden">
        <div className="mx-4 text-base sm:text-lg md:text-xl">
          <div className="font-extrabold text-theme-accent">
            ROLLER CHAMPIONS TRACKER
          </div>
          <div>Stat tracker for Ubisoft's Roller Champions</div>
        </div>
        <div className="flex flex-col items-center gap-8 mx-4">
          <Input placeHolder="Username" label="Username" />
          <Select label="Platform" />
        </div>
        <Button type="submit">ROLL</Button>
      </div>
    </form>
  );
};

export default Home;
