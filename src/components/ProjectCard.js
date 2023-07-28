import React from "react"


function ProjectCard({item}){


   return(
      <div>
         <h2>{item.name}</h2>
         <img src={item.image}></img>
         <p>{item.description}</p>

      </div>
      
   )
}


export default ProjectCard;