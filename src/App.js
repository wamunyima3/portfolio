import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // if we want multiple pages we can create routes
  return (
    <>
        <NavBar/>
        <Hero/>
        <Services/>
        <Projects/>
        <Contact/>
    </>
  );
}

export default App;
