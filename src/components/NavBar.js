import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(){
   return (
      <nav className="navbar">
         <NavLink className="navlink" exact to="/">HOME</NavLink>
         <NavLink className="navlink" exact to="/about">ABOUT</NavLink>
         <NavLink className="navlink" exact to="/projects">PROJECTS</NavLink>
      </nav>
   )
}

export default NavBar;