import React from "react"
import "../styles/global.css"
import Navbar from "./navbar"
import Footer from "./footer"


export default ({ children }) => (
  <div>
    <Navbar/>
    <div className="mainContainer">
     {children}
    </div>
    <Footer/>
  </div>
)
