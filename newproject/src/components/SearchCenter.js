import React from 'react'
import img2 from './img2.jpg'
export default function () {
  return (
    <>
    <div className="container mt-5 text-center">
        <p className='h3'>Search Nearest Vaccination Center</p>
                <div class="d-flex p-2 bd-highlight mt-4 justify-content-center">
                    <input type="text" class="form-control mx-4" placeholder="Enter your pincode" aria-label="pincode" aria-describedby="basic-addon2" style={{width:"25%"}}/>
                    <button type="button" class="btn btn-success">Success</button>
                </div>
                
    </div>
    </>
  )
}
