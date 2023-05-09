import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Nopage from "./components/Nopage/Nopage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
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
        <Route path="/Project">
          <Project />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
