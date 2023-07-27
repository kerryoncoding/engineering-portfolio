import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
