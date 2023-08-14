import React from "react"
import Challenge from "./Challenge"

function Home(){

   return (
      <div>
         <Challenge />
         <h2>Hello, I am</h2>
         <h1>Kerry Guarino</h1>
         <img src="http://www.kerryoncoding.com/images/kerryavatar.png" alt="kerry avitar" className="homeImage" />
         <h3>Engineer. Problem Solver. Lifelong Learner.</h3>
      </div>
   )
}

export default Home;