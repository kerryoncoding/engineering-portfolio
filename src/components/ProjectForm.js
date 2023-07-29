import React from "react"


function ProjectForm(){


   return (
      <div className="formContainer">
         <h2>Add A Project</h2>
         <form className="projectForm">
            <div>
               <label>Name: </label>
               <br />
               <input type="text" id="name" />
            </div>
            <div>
               <label>Image: </label>
            <br />
               <input type="text" id="image" />
            </div>
            <div>
               <label>Description: </label>
            <br />
               <input type="text" id="description" />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>
         </form>
      </div>
      
   )  
}


export default ProjectForm;