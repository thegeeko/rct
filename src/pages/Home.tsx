interface Props {
  errorState?: string;
  setErrorState(error: string): void;
}

import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

const Home = (props: Props) => {
  const navigate = useNavigate();

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

  return (
    <form onSubmit={submitHandler}>
      <div className="flex gap-12 md:gap-8 2xl:gap-14 flex-col w-full h-full text-center items-center mt-20 md:mt-12 lg:mt-20 overflow-x-hidden">
        <div className="mx-2 md:mx-4 text-base sm:text-lg md:text-xl 2xl:text-4xl ease-in-out duration-200">
          <div className="font-extrabold text-theme-accent">
            ROLLER CHAMPIONS TRACKER
          </div>
          <div className="dark:text-white ease-in-out duration-200">
            Stat tracker for Roller Champions
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mx-2">
          {props.errorState && (
            <span className="text-red-600 self-start text-sm lg:text-lg">
              {props.errorState}
            </span>
          )}
          <Input
            placeHolder="Username"
            label="Username"
            onErrorRemove={props.setErrorState}
          />
          <Select label="Platform" onErrorRemove={props.setErrorState} />
        </div>
        <Button type="submit">ROLL</Button>
      </div>
    </form>
  );
};

export default Home;
