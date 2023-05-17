import "./styles.css";
import {
  BrowserRouter,
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

import LanguageContext from "./components/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";


export default function App() {
  const [language, setLanguage] = useState("en");
  const [onepage, setOnepage] = useState(false);
  let history = useHistory();
  const toggleSwitchPage = () => {
    setOnepage(!onepage);
    onepage ? history.push("Nopage") : history.push("/");
  };

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {/* <Switch>
          <Route exact path="/"> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/Education">
            <Education />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        {/* </Route>
          <Route exact path="/Nopage">
            <Nopage />
          </Route>
        </Switch> */}
        <button onClick={toggleSwitchPage}>Switch</button>
        <Nopage />
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}
