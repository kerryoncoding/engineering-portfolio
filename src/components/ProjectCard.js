import React from "react"


function ProjectCard({item}){


   return(
      <div className="card">
         <h2>{item.name}</h2>
         <img src={item.image} className="card-image"></img>
         <p>{item.description}</p>
      </div>
      
   )
}


export default ProjectCard;