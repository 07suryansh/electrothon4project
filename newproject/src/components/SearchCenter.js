import React from "react";
import { BrowserRouter } from "react-router-dom";
import ByCity from "./ByCity";
import ByPincode from "./ByPincode";
import img2 from "./img2.jpg";
import { Routes, Route, Link } from "react-router-dom";
import SlotsComponent from "./SlotsComponent";
import { useState } from "react";
export default function () {

  const [input, setinput] = useState("");
  return (
    <>
      <div className="container mt-5 text-center">
        <p className="h1 my-5">Search Nearest Vaccination Center</p>
        {/* <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="bypincode" >Pincode</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="bycity">City</Link>
            </li>
           
            
            </ul>    */}
        <div className="container">
          <div className="d-flex p-2 bd-highlight mt-4 justify-content-center">
            
            <input
              type="text"
              className="form-control mx-3"
              placeholder="Enter your pincode"
              aria-label="pincode"
              
              aria-describedby="basic-addon2"
              style={{ width: "25%" }}
            />
            <button type="button" className="btn btn-success" >
              Search
            </button>
            
          </div>
          <SlotsComponent />
        </div>

        {/* <ByPincode/> */}
        {/* <ByCity/> */}
      </div>
    </>
  );
}
