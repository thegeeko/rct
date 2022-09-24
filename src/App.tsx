import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  // TODO: Reroute depending on whether URL parameters are provided
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
