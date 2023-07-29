import React, {useState} from "react"


function ProjectForm(){
   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [image, setImage] = useState("")

   function handleForm(e){
      e.preventDefault()
      console.log(name, description, image)
   }

   return (
      <div className="formContainer">
         <h2>Add A Project</h2>
         <form className="projectForm" onSubmit={handleForm}>
            <div>
               <label>Name: </label>
               <br />
               <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
               <label>Image: </label>
            <br />
               <input type="text" id="image" onChange={(e)=>setImage(e.target.value)} />
            </div>
            <div>
               <label>Description: </label>
            <br />
               <input type="text" id="description" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>
         </form>
      </div>
      
   )  
}


export default ProjectForm;