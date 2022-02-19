import React from 'react'
import img2 from './img2.jpg'
export default function Slots() {
  return (
    <>
    <div className="d-flex container mt-4">
    <div className="card" style={{width: "250px",height:"250px"}}>
  <img src={img2} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">City Hospital</h5>
    <p className="card-text">p the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Register</a>
  </div>
</div>
</div>
    </>
  )
}
