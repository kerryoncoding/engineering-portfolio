import React, {useState} from "react"


function ProjectForm({projectList, setProjectList}){
   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [image, setImage] = useState("")
   


   function handleForm(e){
      e.preventDefault()
      let newProject = {
         name: name,
         description: description,
         image: image
      }
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
      setName("")
      setImage("")
      setDescription("")
   }

   return (
      <div className="formContainer">
         <h2>Add A Project</h2>
         <form className="projectForm" onSubmit={handleForm}>
            <div>
               <label>Name: </label>
               <br />
               <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
               <label>Image: </label>
            <br />
               <input type="text" id="image" value={image}  onChange={(e)=>setImage(e.target.value)} />
            </div>
            <div>
               <label>Description: </label>
            <br />
               <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>
         </form>
      </div>
      
   )  
}


export default ProjectForm;