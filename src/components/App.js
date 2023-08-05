import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import '../App.css';

function App() {

  const [projectList, setProjectList] = useState([])
  const URL = "http://localhost:3000/projects"

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setProjectList(data))
  },[])

  
  function deleteItem(item){
    fetch(`${URL}/${item}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data=> {
      let updatedList = projectList.filter((data)=> data.id != item)
      setProjectList(updatedList)
    })
  }

  function addProject(newProject){
    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
         "Content-Type":"application/json"
      },
      body: JSON.stringify(newProject)
   })
   .then(res => res.json())
   .then(data => {
      setProjectList([...projectList, data])
   })
   
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects projectList={projectList} addProject={addProject} deleteItem={deleteItem} />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
