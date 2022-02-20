import React from 'react'
import img2 from './img2.jpg'
import { Link } from "react-router-dom";
export default function Slots(props) {
  return (
    <>
    <div className="d-flex container mt-4">
    <div className="card" style={{width: "250px",height:"250px"}}>
  <img src={img2} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title h4">{props.name}</h5>
    <p className="card-text h5">{props.vaccine}</p>
    <p className="card-text h6">{props.age}</p>
    <p className="card-text h6">Dose 1={props.dose1}  Dose 2={props.dose2}</p>
    <Link to="https://selfregistration.cowin.gov.in/" className="btn btn-primary">Register</Link>
  </div>
</div>
</div>
    </>
  )
}
