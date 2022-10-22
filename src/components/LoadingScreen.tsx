import { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    timer = setTimeout(() => {
      window.location.reload();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="dark:text-white font-bold text-xl flex flex-row gap-2 ease-in-out duration-200">
        <div className="border-4 w-6 h-6 animate-spin border-black dark:border-white !border-t-transparent rounded-3xl"></div>
        Fetching...
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
