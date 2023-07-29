import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(){
   return (
      <nav>
         <NavLink exact to="/" >HOME</NavLink>
         <NavLink exact to="/about" >ABOUT</NavLink>
         <NavLink exact to="/projects" >PROJECTS</NavLink>
      </nav>
   )
}

export default NavBar;