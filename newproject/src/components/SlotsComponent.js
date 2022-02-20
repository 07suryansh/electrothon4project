import React from 'react'
import Slots from './Slots'

import { useState } from 'react'
import { useEffect } from 'react';
export default function () {

// const centers= [
//     {
//         "center_id": 717024,
//         "name": "PCVC REGENCY HOSPITAL PARADE",
//         "address": "PPN MARKET PARADE",
//         "state_name": "Uttar Pradesh",
//         "district_name": "Kanpur Nagar",
//         "block_name": "Kanpur City",
//         "pincode": 208001,
//         "from": "14:00:00",
//         "to": "15:00:00",
//         "lat": 26,
//         "long": 80,
//         "fee_type": "Paid",
//         "session_id": "d16b9f37-ed6a-49f5-ab4e-e150fe736baf",
//         "date": "22-02-2022",
//         "available_capacity": 118,
//         "available_capacity_dose1": 50,
//         "available_capacity_dose2": 48,
//         "fee": "1400",
//         "min_age_limit": 15,
//         "allow_all_age": true,
//         "vaccine": "COVAXIN",
//         "slots": [
//         "02:00PM-03:00PM"
//         ]
//         },
//         {
//         "center_id": 717024,
//         "name": "PCVC REGENCY HOSPITAL PARADE",
//         "address": "PPN MARKET PARADE",
//         "state_name": "Uttar Pradesh",
//         "district_name": "Kanpur Nagar",
//         "block_name": "Kanpur City",
//         "pincode": 208001,
//         "from": "15:30:00",
//         "to": "16:30:00",
//         "lat": 26,
//         "long": 80,
//         "fee_type": "Paid",
//         "session_id": "7d8733aa-d986-4132-ae8d-2f5ff8a31a84",
//         "date": "22-02-2022",
//         "available_capacity": 118,
//         "available_capacity_dose1": 90,
//         "available_capacity_dose2": 78,
//         "fee": "780",
//         "min_age_limit": 18,
//         "max_age_limit": 44,
//         "allow_all_age": false,
//         "vaccine": "COVISHIELD",
//         "slots": [
//         "03:30PM-04:30PM"
//         ]
//         }
    
//   ];

let centers=[];

  useEffect(async()=>{
     
      let url=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=208001&date=${new Date().toLocaleDateString()}`;
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      
      setState(parsedData.sessions)  
      
      
  },[])
  const [state, setState] = useState(centers);
  
  return (
      
    <div className='container'>
       
        <div className="row">
        {state.map((element)=>{
            return  <div className="col-md-3" key={element.session_id}>
            <Slots  title={element.name+" "+element.address} vacc={element.vaccine} dose1={element.available_capacity_dose1} dose2={element.available_capacity_dose2} age={element.min_age_limit} url="https://selfregistration.cowin.gov.in/"/>
            </div>
        })}
            
        </div>
        
    </div>
  )
}
