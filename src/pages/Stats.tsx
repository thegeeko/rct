import { useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import NavBar from "../components/Navbar";
import { motion } from "framer-motion";
// @ts-ignore
import Parse from "parse/dist/parse.min.js";

interface Props {
  setErrorState(error: string): void;
}

const Stats = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLonger, setIsLonger] = useState(false);

  const [userData, setUserData] = useState();

  // Get data from URL search parameters
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const platform = searchParams.get("platform");

  // Redirect to home if parameters are not provided
  if (!username || !platform) {
    props.setErrorState("Please input username and platform");
    return <Navigate to="/" />;
  }

  // Fetch data
  useEffect(() => {
    // Cloud function to get data
    const fetchData = async () => {
      const res = await Parse.Cloud.run("fetchData", { username, platform });
      console.log(res);
      if (res != "404") {
        setUserData(res);
        setIsLoading(false);
      } else {
        // Reroute to home/previous stats page if user not found
        props.setErrorState("User was not found");
        return <Navigate to="/" />;
      }
    };
    fetchData();
  }, []);

  // Show loading sceen
  if (isLoading) {
    return (
      <>
        <NavBar />
        <LoadingScreen isLonger={isLonger} />
      </>
    );
  }

  return (
    <div>
      <NavBar searchBar />
      <motion.div
        className="mt-20 md:mt-11 xl:mt-12 dark:text-white select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* TODO: Pass data down to stat viewers */}
      </motion.div>
    </div>
  );
};

export default Stats;
