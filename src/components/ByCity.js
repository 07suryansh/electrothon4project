import React from 'react'

export default function () {
  return (
    <div className='container'>
        <div className="d-flex justify-content-center mt-4">
            <select className="form-select mx-2" aria-label="Default select example" style={{width:"25%"}}>
                <option selected>Select State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="form-select mx-2" aria-label="Default select example" style={{width:"25%"}}>
                <option selected>Select City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button type="button" className="btn btn-success mx-2">Search</button>
        </div>
    </div>
  )
}
