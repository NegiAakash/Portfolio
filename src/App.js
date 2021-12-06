import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Contacts from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import { NavComp } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import { GlobalStyle } from "./Global.styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <header className={`${darkMode ? "dark" : "light"} transition`}>
        <div className="header">
          <NavComp darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div className="socials"></div>
        <div className="body">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>{" "}
          <section id="resume">
            <Resume />
          </section>
          <section id="contact">
            <Contacts />
          </section>
          <section className="footer">
            <Footer />
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
