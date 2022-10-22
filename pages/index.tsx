import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import NavBar from "../components/Navbar";

interface Props {
  errorState?: string;
  setErrorState(error: string): void;
}

const Home = (props: Props) => {
  const router = useRouter();
  const [errorState, setErrorState] = useState(router.query.error);
  console.log(errorState)

  // Submit handler (save data to localStorage and navigate to stats)
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = event.target as typeof event.target & {
      username: { value: string };
      platform: { value: string };
    };
    localStorage.setItem("username", data.username.value);
    localStorage.setItem("platform", data.platform.value);

    router.push(
      `/stats?username=${data.username.value}&platform=${data.platform.value}`
    );
  };

  return (
    <>
      <Head>
        <title>RCT</title>
        <meta
          name="Roller Champions Tracker"
          content="Stats tracker for Roller Champions"
        />
        <meta property="og:title" content="Roller Champions Tracker" />
        <meta
          property="og:image"
          content="https://rctgg.vercel.app/cover.png"
        />
        <meta
          property="og:description"
          content="Stats tracker for Roller Champions"
        />
        <meta property="og:url" content="https://rctgg.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/skate.svg" />
      </Head>
      <NavBar />
      <form onSubmit={submitHandler}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex gap-4 md:gap-8 2xl:gap-14 flex-col w-full h-full text-center items-center mt-12 md:mt-12 lg:mt-20 overflow-x-hidden select-none"
        >
          <div className="mx-2 md:mx-4 text-base sm:text-lg md:text-xl 2xl:text-4xl ease-in-out duration-200">
            <div className="font-extrabold text-theme-accent xl:text-2xl 2xl:text-4xl">
              ROLLER CHAMPIONS TRACKER
            </div>
            <div className="dark:text-white ease-in-out duration-200 xl:text-2xl 2xl:text-4xl">
              Stat tracker for Roller Champions
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 mx-2">
            {errorState && (
              <div className="text-red-600 self-start text-sm lg:text-lg">
                {errorState}
              </div>
            )}
            <Input
              placeHolder="Username"
              label="Username"
              onErrorRemove={setErrorState}
            />
            <Select label="Platform" onErrorRemove={setErrorState} />
          </div>
          <Button
            className="px-4 py-1 2xl:px-6 2xl:py-3 2xl:text-3xl"
            type="submit"
          >
            ROLL
          </Button>
        </motion.div>
      </form>
    </>
  );
};

export default Home;
