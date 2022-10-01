import { useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import NavBar from "../components/Navbar";
import { motion } from "framer-motion";

interface Props {
  setErrorState(error: string): void;
}

const Stats = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLonger, setIsLonger] = useState(false);

  // TODO: Check if state persists on refresh
  const [userData, setUserData] = useState({});

  // Get data from URL search parameters
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const platform = searchParams.get("platform");

  // Redirect to home if parameters are not provided
  if (!username || !platform) {
    props.setErrorState("Please input username and platform");
    return <Navigate to="/" />;
  }

  // TODO: Fetch data
  // TODO: Reroute to home/previous stats page if user not found

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
        {username} {platform}
      </motion.div>
    </div>
  );
};

export default Stats;
