import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
