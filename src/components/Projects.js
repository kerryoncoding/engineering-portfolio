import React from "react"
import ProjectForm from "./ProjectForm"



function Projects({projectList}){

   console.log("here", projectList)
   const showProjects = projectList.map((item) => {
      return (
            <div className="card">
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
         <hr></hr>
         <button>Show Form</button>
         <ProjectForm />
      </div>
      
   )
}

export default Projects;