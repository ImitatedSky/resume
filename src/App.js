import "./styles.css";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Project from "./components/Project/Project";
import Nopage from "./components/Nopage/Nopage";
import Onepage from "./components/Onepage";

import LanguageContext from "./components/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [onepage, setOnepage] = useState(false);
  let history = useHistory();
  const toggleSwitchPage = () => {
    setOnepage(!onepage);
    onepage ? history.push("Onepage") : history.push("/");
  };

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {/* <Switch>
          <Route exact path="/"> */}
        <Header />
        <Switch>
          <HashRouter exact path="/">
            <Home />
          </HashRouter>
          <HashRouter path="/AboutMe">
            <AboutMe />
          </HashRouter>
          <HashRouter path="/Experience">
            <Experience />
          </HashRouter>
          <HashRouter path="/Education">
            <Education />
          </HashRouter>
          <HashRouter path="/Project">
            <Project />
          </HashRouter>
          <HashRouter path="/Contact">
            <Contact />
          </HashRouter>
          <HashRouter exact path="/Onepage">
            <Onepage />
          </HashRouter>
        </Switch>

        <button onClick={toggleSwitchPage}>Switch</button>
        <Nopage />
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}
