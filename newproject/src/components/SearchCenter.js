import React from 'react'
import ByCity from './ByCity'
import ByPincode from './ByPincode'
import img2 from './img2.jpg'
export default function () {
  return (
    <>
    <div className="container mt-5 text-center">
        <p className='h3'>Search Nearest Vaccination Center</p>
                <ByPincode/>
                <ByCity/>
                
    </div>
    </>
  )
}
