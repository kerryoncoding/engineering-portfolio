import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(){
   return (
      <div>
         <NavLink exact to="/">HOME</NavLink>
         <NavLink exact to="/about">ABOUT</NavLink>
         <NavLink exact to="/projects">PROJECTS</NavLink>
      </div>
   )
}

export default NavBar;