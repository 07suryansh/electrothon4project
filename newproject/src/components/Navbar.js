import React from 'react'
import logo from './img2.jpg'
import { Routes, Route, Link } from "react-router-dom";
export default function 
() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:"70px"}}>
  <div className="container-fluid">
  
    <Link className="navbar-brand" to="#"><img src={logo} width="60" height="60" style={{borderRadius:"2px"}} className='mx-1'/>
        </Link>
        <Link className="navbar-brand " to="home"><h4>CovidVaccination</h4></Link>
       
    
      
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active h4" aria-current="page" to="faq">FAQ</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
