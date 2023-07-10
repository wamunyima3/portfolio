import React, { useContext } from 'react';
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {themeContext} from "./components/ThemeContext"

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? '#18191a' : '',
      color: darkMode ? 'white' : 'black'
    }}>
        <NavBar/>
        <div style={{
          padding:'0 7rem'
        }}>
          <Hero id="hero"/>
          <Services id="services"/>
          <Projects id="projects"/>
          <Contact id="contact"/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
