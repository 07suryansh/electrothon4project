import React from 'react'
import Slots from './Slots'
export default function () {
  return (
    <div className='d-flex'>
        <Slots name="City Hospital" vaccine="covaxin" dose1="2" dose2="10" age="15+"/>
        <Slots/>
        <Slots/>
        <Slots/>
        
        
    </div>
  )
}
