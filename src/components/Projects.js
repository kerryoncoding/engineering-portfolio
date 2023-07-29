import React, {useState} from "react"
import ProjectForm from "./ProjectForm"



function Projects({projectList}){

   const [showForm, setShowForm] = useState(false)
   const [buttonText, setButtonText] = useState("Show")

   function toggleForm() {
      setShowForm(!showForm)
      {(showForm) ? setButtonText("Show") : setButtonText("Hide")}
      
   }

      
   console.log("here", projectList)
   const showProjects = projectList.map((item) => {
      return (
            <div className="card" key={item.id}>
               <h2>{item.name}</h2>
               <img src={item.image} className="card-image"></img>
               <p>{item.description}</p>
            </div>
      )
   })


   return (
      <div>
         <h2>Projects</h2>
         {showProjects}
         <hr className="breakline" />
         <button onClick={toggleForm} className="formToggleButton">{buttonText} Form</button>
         {(showForm) ? <ProjectForm /> : "" }
      </div>
      
   )
}

export default Projects;