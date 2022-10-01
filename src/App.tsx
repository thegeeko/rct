import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  // ErrorState management
  const [errorState, setErrorState] = useState("");
  const errorHandler = (error: string) => {
    if (errorState != error) setErrorState(error);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/stats"
            element={<Stats setErrorState={setErrorState} />}
          />
          <Route
            path="/"
            element={
              <Home errorState={errorState} setErrorState={errorHandler} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
