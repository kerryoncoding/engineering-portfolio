import React from "react"


function ProjectItem({item, deleteItem}){

      function handleDeleteClick(deleteItem){
         deleteItem(item.id)
      }

      return (
            <div className="card" key={item.id}>
               <button className="cardDeleteButton" onClick={handleDeleteClick}>X</button>
               <h2>{item.name}</h2>
               <img src={item.image} className="card-image" alt={item.name}></img>
               <p>{item.description}</p>
            </div>
      )

}

export default ProjectItem;