import React from "react"
import ProjectCard from "./ProjectCard"



function Projects({projectList}){

   console.log("here", projectList)
   const showProjects = projectList.map((item) => {
      return (
         <ProjectCard
         item= {item}
         key={item.id}
         />
      )
   })



   return (
      <div>
         <h2>Projects</h2>
         {showProjects}
         <hr></hr>
         <button>Show Form</button>
      </div>
      
   )
}

export default Projects;