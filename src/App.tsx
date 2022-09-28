import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  // TODO: Screen transitions

  // ErrorState management
  const [errorState, setErrorState] = useState("");
  const errorHandler = (error: string) => {
    if (errorState != error) setErrorState(error);
  };

  return (
    <>
      <Routes>
        <Route path="/stats" element={<Stats setErrorState={setErrorState} />} />
        <Route path="/" element={<Home errorState={errorState} setErrorState={errorHandler} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
