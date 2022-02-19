import React from 'react'

export default function () {
  return (
    <div className='container'>
        <div className="d-flex justify-content-center">
            <select class="form-select mx-2" aria-label="Default select example" style={{width:"25%"}}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select mx-2" aria-label="Default select example" style={{width:"25%"}}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button type="button" className="btn btn-success mx-2">Search</button>
        </div>
    </div>
  )
}
