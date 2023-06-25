import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  // if we want multiple pages we can create routes
  return (
    <>
        <NavBar/>
        <Hero/>
        <Services/>
    </>
  );
}

export default App;
