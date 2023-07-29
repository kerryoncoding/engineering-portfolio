import React from "react"


function ProjectForm(){


   return (
      <div>
         <h2>Add A Project</h2>
         <form className="projectForm">
            <span>
               <label>Name: </label>
               <input type="text" id="name" />
            </span>
            <span>
               <label>Image: </label>
               <input type="text" id="image" />
            </span>
            <span>
               <label>Description: </label>
               <input type="text" id="description" />
            </span>
         </form>
      </div>
      
   )  
}


export default ProjectForm;