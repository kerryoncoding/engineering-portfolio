import React from "react"
import {Route, Switch} from "react-router-dom"
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
        <Route exact path="/about">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/about">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
