import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ByCity from './ByCity'
import ByPincode from './ByPincode'
import img2 from './img2.jpg'
import { Link } from "react-router-dom";
export default function () {
  return (
    <>
    
    <div className="container mt-5 text-center">
        <p className='h1 my-5'>Search Nearest Vaccination Center</p>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="bypincode" >Pincode</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="bycity">City</Link>
            </li>
            
            
            </ul>   
            


                {/* <ByPincode/>
                <ByCity/> */}
                
    </div>
    
    </>
  )
}
